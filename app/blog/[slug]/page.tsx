import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  decodeWordPressText,
  getWordPressPostBySlug,
  getWordPressPostSlugs,
} from "@/lib/wordpress";
import { SemrushPreFooterCTA } from "@/components/semrush/PreFooterCTA";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getWordPressPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getWordPressPostBySlug(slug);

  if (!post) return {};

  const title = decodeWordPressText(post.title.rendered);
  const description = decodeWordPressText(post.excerpt.rendered);
  const image = post.featuredImage?.source_url;

  return {
    title,
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.modified,
      url: `/blog/${post.slug}`,
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getWordPressPostBySlug(slug);

  if (!post) notFound();

  const title = decodeWordPressText(post.title.rendered);

  return (
    <>
      <article>
        <header
          className="relative overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% -10%, rgba(245,200,66,0.15), transparent 65%), linear-gradient(180deg, #10121a 0%, #09090e 100%)",
          }}
        >
          <div className="absolute inset-0 pointer-events-none grid-bg-soft" />
          <div className="relative max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 pb-12 sm:pb-16 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#f5c842]"
            >
              <span aria-hidden>←</span> All insights
            </Link>
            <h1 className="mt-5 text-[32px] sm:text-[46px] lg:text-[58px] font-black text-white leading-[1.06] tracking-[-1.4px]">
              {title}
            </h1>
            <time
              dateTime={post.date}
              className="mt-5 block text-[12px] font-semibold text-white/45"
            >
              {formatDate(post.date)}
            </time>
          </div>
        </header>

        <div className="bg-[#f6f6f8]">
          <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
            {post.featuredImage && (
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-[#e9e9ed] mb-10 sm:mb-14">
                <Image
                  src={post.featuredImage.source_url}
                  alt={post.featuredImage.alt_text || title}
                  fill
                  priority
                  sizes="(max-width: 960px) 100vw, 960px"
                  className="object-cover"
                />
              </div>
            )}

            <div
              className="wp-content max-w-[800px] mx-auto text-[#09090e]"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </div>
        </div>
      </article>

      <SemrushPreFooterCTA />
    </>
  );
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Australia/Melbourne",
  }).format(new Date(date));
}

