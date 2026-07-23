import "server-only";

const configuredApiUrl =
  process.env.WORDPRESS_API_URL ??
  "https://rankconvert.com.au/wp-json/wp/v2";

export const WORDPRESS_API_URL = configuredApiUrl.replace(/\/+$/, "");

type RenderedField = {
  rendered: string;
  protected?: boolean;
};

export type WordPressPost = {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: "publish";
  title: RenderedField;
  excerpt: RenderedField;
  content: RenderedField;
  featured_media: number;
};

export type WordPressMedia = {
  id: number;
  source_url: string;
  alt_text: string;
  media_details?: {
    width?: number;
    height?: number;
    sizes?: Record<
      string,
      {
        source_url: string;
        width: number;
        height: number;
      }
    >;
  };
};

export type WordPressPostWithMedia = WordPressPost & {
  featuredImage: WordPressMedia | null;
};

async function wordpressFetch<T>(
  path: string,
  tags: string[] = ["wordpress"],
): Promise<T> {
  const response = await fetch(`${WORDPRESS_API_URL}/${path}`, {
    headers: { Accept: "application/json" },
    next: {
      revalidate: 3600,
      tags: ["wordpress", ...tags],
    },
  });

  if (!response.ok) {
    throw new Error(
      `WordPress request failed (${response.status}) for ${path}`,
    );
  }

  return response.json() as Promise<T>;
}

export async function getWordPressPosts(
  limit = 12,
): Promise<WordPressPostWithMedia[]> {
  try {
    const posts = await wordpressFetch<WordPressPost[]>(
      `posts?status=publish&per_page=${Math.min(Math.max(limit, 1), 100)}&orderby=date&order=desc&_fields=id,date,modified,slug,status,title,excerpt,content,featured_media`,
      ["wordpress:posts"],
    );

    return Promise.all(
      posts.map(async (post) => ({
        ...post,
        featuredImage: await getWordPressMedia(post.featured_media),
      })),
    );
  } catch (error) {
    console.error("Unable to load WordPress posts:", error);
    return [];
  }
}

export async function getWordPressPostBySlug(
  slug: string,
): Promise<WordPressPostWithMedia | null> {
  try {
    const posts = await wordpressFetch<WordPressPost[]>(
      `posts?status=publish&slug=${encodeURIComponent(slug)}&per_page=1&_fields=id,date,modified,slug,status,title,excerpt,content,featured_media`,
      ["wordpress:posts", `wordpress:post:${slug}`],
    );
    const post = posts[0];

    if (!post) return null;

    return {
      ...post,
      featuredImage: await getWordPressMedia(post.featured_media),
    };
  } catch (error) {
    console.error(`Unable to load WordPress post "${slug}":`, error);
    return null;
  }
}

export async function getWordPressPostSlugs(): Promise<string[]> {
  try {
    const posts = await wordpressFetch<Array<{ slug: string }>>(
      "posts?status=publish&per_page=100&_fields=slug",
      ["wordpress:posts"],
    );
    return posts.map((post) => post.slug);
  } catch (error) {
    console.error("Unable to load WordPress post slugs:", error);
    return [];
  }
}

async function getWordPressMedia(
  mediaId: number,
): Promise<WordPressMedia | null> {
  if (!mediaId) return null;

  try {
    return await wordpressFetch<WordPressMedia>(
      `media/${mediaId}?_fields=id,source_url,alt_text,media_details`,
      [`wordpress:media:${mediaId}`],
    );
  } catch (error) {
    console.error(`Unable to load WordPress media ${mediaId}:`, error);
    return null;
  }
}

export function decodeWordPressText(value: string): string {
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/&#(\d+);/g, (_, code: string) =>
      String.fromCodePoint(Number(code)),
    )
    .replace(/&#x([0-9a-f]+);/gi, (_, code: string) =>
      String.fromCodePoint(Number.parseInt(code, 16)),
    )
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

