import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getFeaturedArticles } from "@/data/articles";
import { Reveal } from "@/components/Reveal";

export function FeaturedSection() {
  const featured = getFeaturedArticles();
  const [lead, second, third, ...compact] = featured;

  return (
    <section
      id="featured"
      aria-labelledby="featured-heading"
      className="bg-[#F4EEDF] text-[#111111] border-b rule-ink scroll-mt-24"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-28">
        {/* Section Masthead */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 sm:pb-10 border-b rule-ink-strong">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold tracking-[0.22em] text-[#00D6C9] bg-[#111111] px-2 py-0.5">
                  01
                </span>
                <span className="text-[11px] uppercase tracking-[0.24em] font-medium text-[#111111]/75">
                  Curated Reading
                </span>
              </div>
              <h2
                id="featured-heading"
                className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-medium tracking-[-0.02em] leading-[1.02]"
              >
                Featured Writings
              </h2>
            </div>
            <p className="text-sm sm:text-[15px] leading-relaxed text-[#111111]/75 max-w-md">
              Five entry points across her work—from long-form reflections on
              solitude and emotional exhaustion to unflinching social critique.
            </p>
          </div>
        </Reveal>

        {/* Tier 1: Lead Cover Essay (Ink Black editorial spread) */}
        {lead && (
          <Reveal delayMs={60}>
            <article className="mt-10 bg-[#111111] text-[#F4EEDF] border border-[#111111] p-6 sm:p-10 lg:p-14">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                <div className="lg:col-span-4 flex flex-col justify-between lg:border-r rule-ivory lg:pr-8 space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[#00D6C9] font-medium">
                      <span
                        className="w-2 h-2 bg-[#00D6C9]"
                        aria-hidden="true"
                      />
                      Lead Essay
                    </div>
                    <p
                      aria-hidden="true"
                      className="font-serif text-6xl sm:text-7xl lg:text-8xl font-normal leading-none text-[#F4EEDF]/20 mt-4 select-none"
                    >
                      No. {lead.issueNumber}
                    </p>
                  </div>

                  <div className="space-y-2 pt-4 border-t rule-ivory text-xs uppercase tracking-[0.16em]">
                    <p className="text-[#00D6C9] font-medium">{lead.category}</p>
                    <p className="text-[#F4EEDF]/75">{lead.displayDate}</p>
                    <p className="text-[#F4EEDF]/65">
                      {lead.readingTimeMinutes} min read · {lead.wordCount} words
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
                  <Link
                    href={`/writings/${lead.slug}`}
                    className="group block"
                  >
                    <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.95rem] font-medium leading-[1.08] tracking-[-0.015em] text-[#F4EEDF] group-hover:text-[#00D6C9] transition-colors duration-200">
                      {lead.title}
                    </h3>
                  </Link>

                  <p className="text-base sm:text-lg leading-[1.8] text-[#F4EEDF]/80 max-w-[60ch]">
                    {lead.description}
                  </p>

                  <div className="pt-4 flex flex-wrap items-center gap-5">
                    <Link
                      href={`/writings/${lead.slug}`}
                      className="group inline-flex items-center gap-2.5 px-6 py-3 bg-[#00D6C9] text-[#111111] text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#F4EEDF] transition-colors duration-200"
                    >
                      <span>Read Full Essay</span>
                      <ArrowRight
                        className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>

                    <a
                      href={lead.bloggerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="editorial-underline inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-[#F4EEDF]/80 hover:text-[#F4EEDF]"
                    >
                      <span>Original on Blogger</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        )}

        {/* Tier 2: Asymmetric Dual Feature Spread (7 / 5 split) */}
        {(second || third) && (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {second && (
              <Reveal delayMs={100} className="lg:col-span-7 flex">
                <article className="flex flex-col justify-between w-full border rule-ink-strong p-6 sm:p-9 bg-[#F4EEDF] hover:border-[#00D6C9] transition-colors duration-200">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b rule-ink text-[11px] uppercase tracking-[0.18em]">
                      <span className="font-semibold text-[#111111]">
                        No. {second.issueNumber} · {second.category}
                      </span>
                      <span className="text-[#111111]/70">
                        {second.displayDate} · {second.readingTimeMinutes} min
                      </span>
                    </div>

                    <Link
                      href={`/writings/${second.slug}`}
                      className="group block mt-6"
                    >
                      <h3 className="font-serif text-2xl sm:text-3xl lg:text-[2.15rem] font-medium leading-[1.14] tracking-[-0.015em] text-[#111111]">
                        <span className="editorial-underline">
                          {second.title}
                        </span>
                      </h3>
                    </Link>

                    <p className="mt-4 text-[15px] leading-[1.75] text-[#111111]/80 max-w-[54ch]">
                      {second.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t rule-ink flex items-center justify-between gap-4">
                    <Link
                      href={`/writings/${second.slug}`}
                      className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#111111]"
                    >
                      <span className="editorial-underline">Read Essay</span>
                      <ArrowRight
                        className="w-3.5 h-3.5 text-[#00D6C9] transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                    <a
                      href={second.bloggerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.15em] text-[#111111]/65 hover:text-[#111111] transition-colors"
                    >
                      <span>Blogger</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </Reveal>
            )}

            {third && (
              <Reveal delayMs={140} className="lg:col-span-5 flex">
                <article className="flex flex-col justify-between w-full border rule-ink border-t-[3px] border-t-[#00D6C9] p-6 sm:p-9 bg-[#F4EEDF]">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b rule-ink text-[11px] uppercase tracking-[0.18em]">
                      <span className="font-semibold text-[#111111]">
                        No. {third.issueNumber} · {third.category}
                      </span>
                      <span className="text-[#111111]/70">
                        {third.shortDate}
                      </span>
                    </div>

                    <Link
                      href={`/writings/${third.slug}`}
                      className="group block mt-6"
                    >
                      <h3 className="font-serif text-2xl sm:text-[1.95rem] font-medium leading-[1.16] tracking-[-0.015em] text-[#111111]">
                        <span className="editorial-underline">
                          {third.title}
                        </span>
                      </h3>
                    </Link>

                    <p className="mt-4 text-[15px] leading-[1.75] text-[#111111]/80">
                      {third.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t rule-ink flex items-center justify-between gap-4">
                    <Link
                      href={`/writings/${third.slug}`}
                      className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#111111]"
                    >
                      <span className="editorial-underline">Read Essay</span>
                      <ArrowRight
                        className="w-3.5 h-3.5 text-[#00D6C9] transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                    <a
                      href={third.bloggerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.15em] text-[#111111]/65 hover:text-[#111111] transition-colors"
                    >
                      <span>Blogger</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </Reveal>
            )}
          </div>
        )}

        {/* Tier 3: Compact Horizontal Editorial Strips */}
        {compact.length > 0 && (
          <Reveal delayMs={180}>
            <div className="mt-8 border-t rule-ink-strong">
              {compact.map((article) => (
                <article
                  key={article.slug}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-baseline py-6 sm:py-7 border-b rule-ink hover:bg-[#111111]/[0.025] transition-colors px-2 -mx-2"
                >
                  <div className="md:col-span-3 flex items-center md:flex-col md:items-start gap-3 md:gap-1">
                    <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#111111]">
                      No. {article.issueNumber} · {article.shortDate}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.16em] text-[#111111]/65">
                      {article.category}
                    </span>
                  </div>

                  <div className="md:col-span-7 space-y-2">
                    <Link href={`/writings/${article.slug}`} className="block">
                      <h3 className="font-serif text-2xl sm:text-[1.7rem] font-medium leading-[1.2] text-[#111111]">
                        <span className="editorial-underline">
                          {article.title}
                        </span>
                      </h3>
                    </Link>
                    <p className="text-sm leading-relaxed text-[#111111]/75 max-w-[62ch]">
                      {article.description}
                    </p>
                  </div>

                  <div className="md:col-span-2 flex md:justify-end items-center gap-4 pt-1 md:pt-0">
                    <Link
                      href={`/writings/${article.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#111111] group-hover:text-[#111111]"
                    >
                      <span>Read</span>
                      <ArrowRight
                        className="w-3.5 h-3.5 text-[#00D6C9] transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
