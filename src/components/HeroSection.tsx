import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";
import { ARTICLES } from "@/data/articles";
import { SITE_CONFIG } from "@/data/site";

export function HeroSection() {
  const latestArticle = ARTICLES[0];

  return (
    <section
      aria-label="Introduction"
      className="relative bg-[#F4EEDF] text-[#111111] border-b rule-ink"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-10 pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-24 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Primary Asymmetric Editorial Column */}
          <div className="lg:col-span-8 lg:pr-6">
            <div className="inline-flex items-center gap-3 border-l-2 border-[#00D6C9] pl-3.5 mb-7 sm:mb-9">
              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-[#111111]">
                {SITE_CONFIG.roleLine}
              </p>
            </div>

            <h1 className="font-serif text-[2.85rem] sm:text-[4.15rem] lg:text-[5.25rem] xl:text-[5.8rem] font-medium leading-[0.98] tracking-[-0.025em] text-[#111111]">
              Some thoughts are{" "}
              <em className="italic font-normal">too important</em> to remain{" "}
              <span className="relative inline-block">
                unspoken.
                <span
                  aria-hidden="true"
                  className="block h-[3px] w-full bg-[#00D6C9] mt-1.5"
                />
              </span>
            </h1>

            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-12 gap-6 items-end">
              <div className="sm:col-span-9 lg:col-span-10">
                <p className="text-base sm:text-lg leading-[1.75] text-[#111111]/85 max-w-[58ch]">
                  A curated archive of essays, late-night questions, and candid
                  observations on emotional honesty, quiet endurance, social
                  expectations, and the slow work of understanding ourselves.
                </p>

                <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
                  <Link
                    href="#archive"
                    className="group inline-flex items-center gap-3 px-6 sm:px-7 py-3.5 sm:py-4 bg-[#111111] text-[#F4EEDF] text-xs sm:text-[13px] font-medium uppercase tracking-[0.16em] border border-[#111111] hover:bg-[#00D6C9] hover:text-[#111111] hover:border-[#00D6C9] transition-colors duration-200"
                  >
                    <span>Explore Writings</span>
                    <ArrowRight
                      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>

                  <Link
                    href="#about"
                    className="group editorial-underline inline-flex items-center gap-2 py-2 text-xs sm:text-[13px] font-medium uppercase tracking-[0.16em] text-[#111111]"
                  >
                    <span>About the Writer</span>
                    <ArrowDownRight
                      className="w-4 h-4 text-[#00D6C9] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Offset Editorial Colophon / Folio Card */}
          <aside className="lg:col-span-4 lg:mt-10 bg-[#111111] text-[#F4EEDF] border-t-[3px] border-[#00D6C9] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b rule-ivory">
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#00D6C9] font-medium">
                  Publication Folio
                </span>
                <span className="text-[11px] uppercase tracking-[0.18em] text-[#F4EEDF]/70">
                  Vol. I · 2026
                </span>
              </div>

              <div className="py-6 border-b rule-ivory space-y-2">
                <p className="font-serif text-2xl sm:text-[1.7rem] italic leading-snug text-[#F4EEDF]">
                  {SITE_CONFIG.publicationName}
                </p>
                <p className="text-xs tracking-[0.06em] text-[#F4EEDF]/70">
                  “{SITE_CONFIG.publicationTagline}”
                </p>
              </div>

              <dl className="py-5 border-b rule-ivory space-y-3 text-xs">
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="uppercase tracking-[0.16em] text-[#F4EEDF]/65">
                    Collected Works
                  </dt>
                  <dd className="font-medium text-[#F4EEDF]">
                    {SITE_CONFIG.totalEssays} Published Essays
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="uppercase tracking-[0.16em] text-[#F4EEDF]/65">
                    Chronology
                  </dt>
                  <dd className="font-medium text-[#F4EEDF]">
                    {SITE_CONFIG.archiveSpan}
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="uppercase tracking-[0.16em] text-[#F4EEDF]/65">
                    Byline
                  </dt>
                  <dd className="font-medium text-[#F4EEDF]">
                    {SITE_CONFIG.authorName}
                  </dd>
                </div>
              </dl>
            </div>

            {latestArticle && (
              <div className="pt-5">
                <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[#00D6C9] font-medium">
                  <span
                    className="w-1.5 h-1.5 bg-[#00D6C9]"
                    aria-hidden="true"
                  />
                  Latest Entry · No. {latestArticle.issueNumber}
                </span>
                <Link
                  href={`/writings/${latestArticle.slug}`}
                  className="group block mt-2.5"
                >
                  <p className="font-serif text-xl leading-snug text-[#F4EEDF] group-hover:text-[#00D6C9] transition-colors">
                    {latestArticle.title}
                  </p>
                  <div className="mt-3 flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-[#F4EEDF]/75">
                    <span>{latestArticle.shortDate}</span>
                    <span className="inline-flex items-center gap-1 text-[#00D6C9]">
                      Read
                      <ArrowUpRight
                        className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Link>
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
