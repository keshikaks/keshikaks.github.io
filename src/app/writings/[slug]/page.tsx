import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import {
  ARTICLES,
  getAdjacentArticles,
  getArticleBySlug,
  getRelatedArticles,
} from "@/data/articles";
import { SITE_CONFIG } from "@/data/site";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ReadingProgressBar } from "@/components/ReadingProgressBar";
import { ArticleBody } from "@/components/ArticleBody";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Essay Not Found",
    };
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: `${article.title} — ${SITE_CONFIG.authorName}`,
      description: article.description,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [SITE_CONFIG.authorName],
      tags: article.keywords,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const { previous, next } = getAdjacentArticles(article.slug);
  const related = getRelatedArticles(article, 3);

  return (
    <>
      <ReadingProgressBar />
      <SiteHeader />

      <main id="main-content" className="bg-[#F4EEDF] text-[#111111]">
        {/* Top Utility Navigation Bar */}
        <div className="border-b rule-ink">
          <div className="mx-auto max-w-[1100px] px-5 sm:px-6 lg:px-10 py-4 flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.16em]">
            <Link
              href="/#archive"
              className="group inline-flex items-center gap-2 font-medium text-[#111111]"
            >
              <ArrowLeft
                className="w-3.5 h-3.5 text-[#00D6C9] transition-transform duration-200 group-hover:-translate-x-1"
                aria-hidden="true"
              />
              <span className="editorial-underline">Back to Archive</span>
            </Link>

            <a
              href={article.bloggerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#111111]/75 hover:text-[#111111] transition-colors"
            >
              <span className="editorial-underline">
                Original Post on Blogger
              </span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Essay Header */}
        <article className="mx-auto max-w-[1100px] px-5 sm:px-6 lg:px-10 pt-12 pb-16 sm:pt-16 sm:pb-24">
          <header className="max-w-[78ch] mx-auto pb-10 sm:pb-12 border-b rule-ink-strong">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] uppercase tracking-[0.2em]">
              <span className="bg-[#111111] text-[#00D6C9] font-semibold px-2.5 py-1">
                No. {article.issueNumber}
              </span>
              <span className="font-semibold text-[#111111]">
                {article.category}
              </span>
              <span className="text-[#111111]/40" aria-hidden="true">
                /
              </span>
              <time
                dateTime={article.publishedAt}
                className="text-[#111111]/75"
              >
                {article.displayDate}
              </time>
              <span className="text-[#111111]/40" aria-hidden="true">
                /
              </span>
              <span className="text-[#111111]/75">
                {article.readingTimeMinutes} min read
              </span>
            </div>

            <h1 className="mt-6 sm:mt-8 font-serif text-3xl sm:text-5xl lg:text-[3.4rem] font-medium leading-[1.08] tracking-[-0.02em] text-[#111111]">
              {article.title}
            </h1>

            <p className="mt-6 text-base sm:text-lg leading-[1.75] text-[#111111]/75 border-l-2 border-[#00D6C9] pl-4">
              {article.description}
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-4 text-xs text-[#111111]/70">
              <span>
                By{" "}
                <strong className="font-semibold text-[#111111]">
                  {SITE_CONFIG.authorName}
                </strong>{" "}
                ·{" "}
                <em className="font-serif italic text-sm">
                  {SITE_CONFIG.publicationName}
                </em>
              </span>
              <span className="uppercase tracking-[0.14em] text-[11px]">
                {article.wordCount.toLocaleString()} words
              </span>
            </div>
          </header>

          {/* Essay Prose Body */}
          <div className="max-w-[66ch] mx-auto pt-10 sm:pt-14 pb-14 sm:pb-16">
            <ArticleBody
              blocks={article.blocks}
              articleTitle={article.title}
            />
          </div>

          {/* Original Source Attribution Colophon */}
          <aside className="max-w-[66ch] mx-auto bg-[#111111] text-[#F4EEDF] border-t-[3px] border-[#00D6C9] p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              <div className="space-y-1.5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#00D6C9] font-medium">
                  Source Publication
                </p>
                <p className="text-sm leading-relaxed text-[#F4EEDF]/80">
                  Originally published on{" "}
                  <em className="font-serif italic text-base text-[#F4EEDF]">
                    {SITE_CONFIG.publicationName}
                  </em>{" "}
                  on {article.displayDate}.
                </p>
              </div>

              <a
                href={article.bloggerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-3 bg-[#00D6C9] text-[#111111] text-xs font-semibold uppercase tracking-[0.15em] hover:bg-[#F4EEDF] transition-colors"
              >
                <span>Read on Blogger</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </aside>

          {/* Previous / Next Essay Navigation */}
          <nav
            aria-label="Adjacent essays"
            className="max-w-[78ch] mx-auto mt-14 pt-10 border-t rule-ink-strong grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="border rule-ink p-5 sm:p-6">
              {previous ? (
                <Link
                  href={`/writings/${previous.slug}`}
                  className="group block space-y-2"
                >
                  <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-[#111111]/65">
                    <ArrowLeft
                      className="w-3.5 h-3.5 text-[#00D6C9] transition-transform duration-200 group-hover:-translate-x-1"
                      aria-hidden="true"
                    />
                    Previous · No. {previous.issueNumber}
                  </span>
                  <p className="font-serif text-xl sm:text-2xl font-medium leading-snug text-[#111111]">
                    <span className="editorial-underline">{previous.title}</span>
                  </p>
                  <p className="text-xs uppercase tracking-[0.14em] text-[#111111]/60">
                    {previous.shortDate}
                  </p>
                </Link>
              ) : (
                <div className="space-y-1.5">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-[#111111]/55">
                    Archive Origin
                  </span>
                  <p className="font-serif text-xl italic text-[#111111]/70">
                    This is the earliest essay in the archive.
                  </p>
                </div>
              )}
            </div>

            <div className="border rule-ink p-5 sm:p-6 sm:text-right">
              {next ? (
                <Link
                  href={`/writings/${next.slug}`}
                  className="group block space-y-2"
                >
                  <span className="inline-flex sm:justify-end items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-[#111111]/65">
                    Next · No. {next.issueNumber}
                    <ArrowRight
                      className="w-3.5 h-3.5 text-[#00D6C9] transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                  <p className="font-serif text-xl sm:text-2xl font-medium leading-snug text-[#111111]">
                    <span className="editorial-underline">{next.title}</span>
                  </p>
                  <p className="text-xs uppercase tracking-[0.14em] text-[#111111]/60">
                    {next.shortDate}
                  </p>
                </Link>
              ) : (
                <div className="space-y-1.5">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-[#111111]/55">
                    Latest Entry
                  </span>
                  <p className="font-serif text-xl italic text-[#111111]/70">
                    This is the most recent essay in the archive.
                  </p>
                </div>
              )}
            </div>
          </nav>
        </article>

        {/* Related Writings Section */}
        <section
          aria-labelledby="related-heading"
          className="border-t rule-ink-strong bg-[#F4EEDF]"
        >
          <div className="mx-auto max-w-[1100px] px-5 sm:px-6 lg:px-10 py-14 sm:py-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b rule-ink">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#111111]/65 font-medium">
                  Continue Reading
                </p>
                <h2
                  id="related-heading"
                  className="mt-1 font-serif text-3xl sm:text-4xl font-medium text-[#111111]"
                >
                  Related Writings
                </h2>
              </div>
              <Link
                href="/#archive"
                className="editorial-underline text-xs font-semibold uppercase tracking-[0.16em] text-[#111111]"
              >
                Browse All 24 Essays
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((item) => (
                <article
                  key={item.slug}
                  className="group border rule-ink p-6 flex flex-col justify-between hover:border-[#111111] transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-[#111111]/65 pb-3 border-b rule-ink">
                      <span>No. {item.issueNumber}</span>
                      <span>{item.shortDate}</span>
                    </div>
                    <Link
                      href={`/writings/${item.slug}`}
                      className="block mt-4"
                    >
                      <h3 className="font-serif text-2xl font-medium leading-[1.2] text-[#111111]">
                        <span className="editorial-underline">{item.title}</span>
                      </h3>
                    </Link>
                    <p className="mt-3 text-sm leading-relaxed text-[#111111]/75">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t rule-ink flex items-center justify-between text-[11px] uppercase tracking-[0.15em]">
                    <span className="text-[#111111]/70">{item.category}</span>
                    <Link
                      href={`/writings/${item.slug}`}
                      className="inline-flex items-center gap-1 font-semibold text-[#111111]"
                    >
                      <span>Read</span>
                      <ArrowRight
                        className="w-3.5 h-3.5 text-[#00D6C9]"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
