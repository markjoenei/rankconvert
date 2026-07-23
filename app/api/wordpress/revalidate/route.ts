import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

type WordPressWebhookPayload = {
  slug?: string;
  status?: string;
  post_type?: string;
};

export async function POST(request: Request) {
  const expectedSecret = process.env.WORDPRESS_REVALIDATE_SECRET;
  const suppliedSecret =
    request.headers.get("x-wordpress-webhook-secret") ??
    new URL(request.url).searchParams.get("secret");

  if (!expectedSecret) {
    return NextResponse.json(
      { revalidated: false, message: "Webhook secret is not configured." },
      { status: 503 },
    );
  }

  if (suppliedSecret !== expectedSecret) {
    return NextResponse.json(
      { revalidated: false, message: "Invalid webhook secret." },
      { status: 401 },
    );
  }

  const payload = (await request
    .json()
    .catch(() => ({}))) as WordPressWebhookPayload;

  revalidateTag("wordpress", "max");
  revalidateTag("wordpress:posts", "max");
  revalidatePath("/blog");

  if (payload.slug) {
    revalidateTag(`wordpress:post:${payload.slug}`, "max");
    revalidatePath(`/blog/${payload.slug}`);
  }

  return NextResponse.json({
    revalidated: true,
    slug: payload.slug ?? null,
    timestamp: new Date().toISOString(),
  });
}

