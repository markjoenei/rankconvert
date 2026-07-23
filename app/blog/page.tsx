import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  decodeWordPressText,
  getWordPressPosts,
} from "@/lib/wordpress";
import { SemrushPreFooterCTA } from "@/components/semrush/PreFooterCTA";

export const metadata: Metadata = {
  title: "Digital Marketing Insights",
  description:
    "Practical SEO, website design, Shopify and digital marketing insights from RankConvert.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  const posts = await getWordPressPosts();

  return (
    <>
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% -10%, rgba(245,200,66,0.16), transparent 65%), linear-gradient(180deg, #10121a 0%, #09090e 100%)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none grid-bg-soft" />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 text-center">
          <div className="text-[11px] font-bold uppercase tracking-widest text-[#f5c842] mb-3">
            RankConvert insights
          </div>
          <h1 className="text-[34px] sm:text-[50px] lg:text-[64px] font-black text-white leading-[1.04] tracking-[-1.5px]">
            Ideas that help businesses grow online.
          </h1>
          <p className="max-w-[650px] mx-auto mt-5 text-[15px] sm:text-[17px] leading-[1.7] text-white/55">
            Clear, practical guidance on SEO, conversion, websites, Shopify and
            digital growth—published through our WordPress newsroom.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 lg:py-24 bg-[#f6f6f8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="overflow-hidden rounded-2xl bg-white flex flex-col"
                  style={{ border: "1px solid rgba(0,0,0,0.08)" }}
                >
                  {post.featuredImage && (
                    <Link
                      href={`/blog/${post.slug}`}
                      className="relative block aspect-[3/2] overflow-hidden bg-[#e9e9ed]"
                    >
                      <Image
                        src={post.featuredImage.source_url}
                        alt={
                          post.featuredImage.alt_text ||
                          decodeWordPressText(post.title.rendered)
                        }
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                      />
                    </Link>
                  )}
                  <div className="p-5 sm:p-6 flex flex-1 flex-col">
                    <time
                      dateTime={post.date}
                      className="text-[10px] font-bold uppercase tracking-widest text-[#c9971a]"
                    >
                      {formatDate(post.date)}
                    </time>
                    <h2 className="mt-3 text-[19px] sm:text-[21px] font-black leading-[1.2] tracking-tight text-[#09090e]">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-[#c9971a] transition-colors"
                      >
                        {decodeWordPressText(post.title.rendered)}
                      </Link>
                    </h2>
                    <p className="mt-3 text-[13px] leading-[1.65] text-[#09090e]/55 line-clamp-3">
                      {decodeWordPressText(post.excerpt.rendered)}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-bold text-[#09090e]"
                    >
                      Read article
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="max-w-[680px] mx-auto rounded-2xl bg-white border border-black/10 px-6 py-14 text-center">
              <h2 className="text-[22px] font-black text-[#09090e]">
                New insights are on the way.
              </h2>
              <p className="mt-3 text-[14px] text-[#09090e]/55">
                The WordPress newsroom is connected, but no published posts are
                currently available.
              </p>
            </div>
          )}
        </div>
      </section>

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

