"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowDownWideNarrow,
  ArrowRight,
  ArrowUpNarrowWide,
  ArrowUpRight,
  RotateCcw,
  Search,
  X,
} from "lucide-react";
import {
  ARTICLES,
  WRITING_CATEGORIES,
  type WritingCategory,
} from "@/data/articles";
import { SITE_CONFIG } from "@/data/site";

type SortOrder = "newest" | "oldest";

export function ArchiveSection() {
  const [selectedCategory, setSelectedCategory] = useState<
    WritingCategory | "All"
  >("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: ARTICLES.length };
    for (const cat of WRITING_CATEGORIES) {
      counts[cat] = ARTICLES.filter((a) => a.category === cat).length;
    }
    return counts;
  }, []);

  const filteredArticles = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    const matched = ARTICLES.filter((article) => {
      if (
        selectedCategory !== "All" &&
        article.category !== selectedCategory
      ) {
        return false;
      }

      if (!query) return true;

      const haystack = [
        article.title,
        article.description,
        article.category,
        article.displayDate,
        article.issueNumber,
        ...article.keywords,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(query);
    });

    return [...matched].sort((a, b) => {
      const timeA = Date.parse(a.publishedAt);
      const timeB = Date.parse(b.publishedAt);
      return sortOrder === "newest" ? timeB - timeA : timeA - timeB;
    });
  }, [selectedCategory, searchQuery, sortOrder]);

  const hasActiveFilters =
    selectedCategory !== "All" ||
    searchQuery.trim().length > 0 ||
    sortOrder !== "newest";

  const clearFilters = () => {
    setSelectedCategory("All");
    setSearchQuery("");
    setSortOrder("newest");
  };

  return (
    <section
      id="archive"
      aria-labelledby="archive-heading"
      className="bg-[#F4EEDF] text-[#111111] border-b rule-ink scroll-mt-24"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-28">
        {/* Archive Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 sm:pb-10 border-b rule-ink-strong">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-semibold tracking-[0.22em] text-[#00D6C9] bg-[#111111] px-2 py-0.5">
                02
              </span>
              <span className="text-[11px] uppercase tracking-[0.24em] font-medium text-[#111111]/75">
                Complete Index · {SITE_CONFIG.archiveSpan}
              </span>
            </div>
            <h2
              id="archive-heading"
              className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-medium tracking-[-0.02em] leading-[1.02]"
            >
              Complete Writing Archive
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.16em]">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#111111] text-[#F4EEDF]">
              <span
                className="w-1.5 h-1.5 bg-[#00D6C9]"
                aria-hidden="true"
              />
              Showing {filteredArticles.length} of {ARTICLES.length} writings
            </span>
          </div>
        </div>

        {/* Control Bar: Search + Sort + Category Filter */}
        <div className="py-7 border-b rule-ink space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
            {/* Search Input */}
            <div className="lg:col-span-7 relative">
              <label htmlFor="archive-search" className="sr-only">
                Search writings by title, theme, or keyword
              </label>
              <Search
                className="w-4 h-4 text-[#111111]/60 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="archive-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, subject, or keyword (e.g. solitude, parents, overthinking, women)…"
                className="w-full h-12 pl-11 pr-11 bg-[#F4EEDF] text-sm text-[#111111] placeholder:text-[#111111]/50 border border-[#111111]/35 focus:border-[#111111] transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search query"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-[#111111]/70 hover:text-[#111111]"
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
              )}
            </div>

            {/* Sort Controls & Clear */}
            <div className="lg:col-span-5 flex flex-wrap items-stretch sm:justify-end gap-2.5">
              <div
                role="group"
                aria-label="Sort writings chronologically"
                className="inline-flex border border-[#111111]/35 h-12"
              >
                <button
                  type="button"
                  onClick={() => setSortOrder("newest")}
                  aria-pressed={sortOrder === "newest"}
                  className={`inline-flex items-center gap-2 px-4 text-xs font-medium uppercase tracking-[0.14em] transition-colors cursor-pointer ${
                    sortOrder === "newest"
                      ? "bg-[#111111] text-[#F4EEDF]"
                      : "bg-[#F4EEDF] text-[#111111] hover:bg-[#111111]/5"
                  }`}
                >
                  <ArrowDownWideNarrow
                    className={`w-3.5 h-3.5 ${
                      sortOrder === "newest" ? "text-[#00D6C9]" : ""
                    }`}
                    aria-hidden="true"
                  />
                  <span>Newest</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSortOrder("oldest")}
                  aria-pressed={sortOrder === "oldest"}
                  className={`inline-flex items-center gap-2 px-4 text-xs font-medium uppercase tracking-[0.14em] border-l border-[#111111]/35 transition-colors cursor-pointer ${
                    sortOrder === "oldest"
                      ? "bg-[#111111] text-[#F4EEDF]"
                      : "bg-[#F4EEDF] text-[#111111] hover:bg-[#111111]/5"
                  }`}
                >
                  <ArrowUpNarrowWide
                    className={`w-3.5 h-3.5 ${
                      sortOrder === "oldest" ? "text-[#00D6C9]" : ""
                    }`}
                    aria-hidden="true"
                  />
                  <span>Oldest</span>
                </button>
              </div>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="inline-flex items-center gap-2 h-12 px-4 text-xs font-medium uppercase tracking-[0.14em] border border-[#111111] text-[#111111] hover:bg-[#00D6C9] hover:border-[#00D6C9] transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Clear</span>
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div
            role="group"
            aria-label="Filter writings by category"
            className="flex flex-wrap items-center gap-2"
          >
            {(["All", ...WRITING_CATEGORIES] as const).map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  aria-pressed={isActive}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs uppercase tracking-[0.14em] border transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#111111] text-[#F4EEDF] border-[#111111]"
                      : "bg-[#F4EEDF] text-[#111111] border-[#111111]/30 hover:border-[#111111]"
                  }`}
                >
                  {isActive && (
                    <span
                      className="w-1.5 h-1.5 bg-[#00D6C9]"
                      aria-hidden="true"
                    />
                  )}
                  <span className="font-medium">{category}</span>
                  <span
                    className={`text-[11px] ${
                      isActive ? "text-[#00D6C9]" : "text-[#111111]/55"
                    }`}
                  >
                    {categoryCounts[category]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop Column Labels */}
        <div
          aria-hidden="true"
          className="hidden lg:grid lg:grid-cols-12 gap-6 py-3.5 border-b rule-ink text-[11px] uppercase tracking-[0.2em] text-[#111111]/60 font-medium"
        >
          <div className="col-span-2">No. / Date</div>
          <div className="col-span-7">Title &amp; Editorial Note</div>
          <div className="col-span-3 text-right">Theme &amp; Links</div>
        </div>

        {/* Editorial Ledger List */}
        {filteredArticles.length > 0 ? (
          <ol className="divide-y divide-[#111111]/20">
            {filteredArticles.map((article) => (
              <li
                key={article.slug}
                className="group relative py-7 sm:py-8 lg:py-9 transition-colors duration-200 hover:bg-[#111111]/[0.03] pl-0 hover:pl-3 -ml-0"
              >
                {/* Electric Teal Hover Bar */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-6 bottom-6 w-[3px] bg-[#00D6C9] scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-top"
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start">
                  {/* Index & Verified Date */}
                  <div className="lg:col-span-2 flex flex-wrap lg:flex-col items-baseline lg:items-start gap-x-3 gap-y-1">
                    <span className="font-serif text-2xl sm:text-[1.65rem] font-medium leading-none text-[#111111]">
                      {article.issueNumber}
                    </span>
                    <time
                      dateTime={article.publishedAt}
                      className="text-xs uppercase tracking-[0.14em] text-[#111111]/70"
                    >
                      {article.shortDate}
                    </time>
                    <span className="lg:hidden text-[11px] uppercase tracking-[0.14em] px-2 py-0.5 border border-[#111111]/30 text-[#111111]">
                      {article.category}
                    </span>
                  </div>

                  {/* Original Title + Description */}
                  <div className="lg:col-span-7 space-y-2.5">
                    <Link
                      href={`/writings/${article.slug}`}
                      className="block"
                    >
                      <h3 className="font-serif text-2xl sm:text-[1.85rem] font-medium leading-[1.18] tracking-[-0.01em] text-[#111111]">
                        <span className="editorial-underline">
                          {article.title}
                        </span>
                      </h3>
                    </Link>

                    <p className="text-sm sm:text-[15px] leading-[1.7] text-[#111111]/75 max-w-[64ch]">
                      {article.description}
                    </p>
                  </div>

                  {/* Category, Reading Time & Actions */}
                  <div className="lg:col-span-3 flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-3 pt-2 lg:pt-0">
                    <div className="hidden lg:flex flex-col items-end gap-1 text-right">
                      <span className="text-[11px] uppercase tracking-[0.16em] font-semibold text-[#111111]">
                        {article.category}
                      </span>
                      <span className="text-xs text-[#111111]/65">
                        {article.readingTimeMinutes} min read
                      </span>
                    </div>

                    <div className="flex items-center gap-4 lg:mt-3">
                      <Link
                        href={`/writings/${article.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#111111] py-1.5"
                      >
                        <span className="editorial-underline">Read Essay</span>
                        <ArrowRight
                          className="w-3.5 h-3.5 text-[#00D6C9] transition-transform duration-200 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </Link>

                      <a
                        href={article.bloggerUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Read "${article.title}" on Blogger (opens in new tab)`}
                        className="inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.14em] text-[#111111]/65 hover:text-[#111111] py-1.5 transition-colors"
                      >
                        <span>Blogger</span>
                        <ArrowUpRight
                          className="w-3.5 h-3.5"
                          aria-hidden="true"
                        />
                      </a>
                    </div>

                    <span className="lg:hidden text-xs text-[#111111]/65">
                      {article.readingTimeMinutes} min
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <div className="py-16 text-center border-b rule-ink space-y-5">
            <p className="font-serif text-3xl text-[#111111]">
              No writings match that filter.
            </p>
            <p className="text-sm text-[#111111]/70 max-w-md mx-auto">
              Try searching a broader term or reset your active filters to view
              all {ARTICLES.length} published essays.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#111111] text-[#F4EEDF] text-xs font-medium uppercase tracking-[0.16em] hover:bg-[#00D6C9] hover:text-[#111111] transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Reset Archive Filters</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
