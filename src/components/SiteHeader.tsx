"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Instagram, Menu, X } from "lucide-react";
import { NAV_ITEMS, SITE_CONFIG } from "@/data/site";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#F4EEDF]/95 backdrop-blur-sm border-b rule-ink">
        {/* Top editorial utility strip */}
        <div className="hidden md:block border-b rule-ink bg-[#111111] text-[#F4EEDF]">
          <div className="mx-auto max-w-[1320px] px-6 lg:px-10 h-9 flex items-center justify-between text-[11px] tracking-[0.18em] uppercase">
            <div className="flex items-center gap-3">
              <span
                className="inline-block w-1.5 h-1.5 bg-[#00D6C9]"
                aria-hidden="true"
              />
              <span>{SITE_CONFIG.publicationName}</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="opacity-80">{SITE_CONFIG.archiveSpan}</span>
              <span className="text-[#00D6C9] font-medium">
                {SITE_CONFIG.totalEssays} Published Writings
              </span>
            </div>
          </div>
        </div>

        {/* Main masthead bar */}
        <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-baseline gap-3 text-[#111111]"
            aria-label={`${SITE_CONFIG.authorName} — Home`}
          >
            <span className="font-serif text-2xl sm:text-[1.75rem] font-semibold tracking-tight leading-none">
              {SITE_CONFIG.authorName}
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 bg-[#00D6C9] transition-transform duration-300 group-hover:scale-125" />
            <span className="hidden lg:inline-block text-[11px] uppercase tracking-[0.2em] text-[#111111]/70">
              Writer’s Portfolio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary"
            className="hidden md:flex items-center gap-7 lg:gap-9"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="editorial-underline text-[13px] font-medium tracking-[0.08em] uppercase text-[#111111] py-1"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-2.5 pl-1">
              <a
                href={SITE_CONFIG.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow ${SITE_CONFIG.instagramHandle} on Instagram`}
                title={`Instagram (${SITE_CONFIG.instagramHandle})`}
                className="inline-flex items-center justify-center w-9 h-9 border border-[#111111]/35 text-[#111111] hover:bg-[#111111] hover:text-[#00D6C9] hover:border-[#111111] transition-colors duration-200"
              >
                <Instagram className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={SITE_CONFIG.links.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-[12px] font-medium uppercase tracking-[0.12em] bg-[#111111] text-[#F4EEDF] border border-[#111111] hover:bg-[#00D6C9] hover:text-[#111111] hover:border-[#00D6C9] transition-colors duration-200"
              >
                <span>Blog</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="md:hidden inline-flex items-center gap-2 px-3 py-2 text-[12px] uppercase tracking-[0.16em] font-medium text-[#111111] border border-[#111111]/30 hover:border-[#00D6C9] transition-colors"
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
          >
            <span>Menu</span>
            <Menu className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Editorial Drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden bg-[#111111] text-[#F4EEDF] flex flex-col justify-between px-6 py-6"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b rule-ivory">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="font-serif text-2xl font-semibold tracking-tight text-[#F4EEDF]"
              >
                {SITE_CONFIG.authorName}
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-[12px] uppercase tracking-[0.16em] border border-[#F4EEDF]/30 text-[#F4EEDF] hover:border-[#00D6C9] hover:text-[#00D6C9] transition-colors"
                aria-label="Close navigation menu"
              >
                <span>Close</span>
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Mobile Primary" className="mt-8 flex flex-col">
              {NAV_ITEMS.map((item, idx) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="group flex items-baseline justify-between py-4 border-b rule-ivory"
                >
                  <span className="font-serif text-3xl font-medium text-[#F4EEDF] group-hover:text-[#00D6C9] transition-colors">
                    {item.label}
                  </span>
                  <span className="text-xs tracking-[0.2em] text-[#00D6C9]">
                    0{idx + 1}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="pt-8 border-t rule-ivory space-y-4">
            <p className="text-xs uppercase tracking-[0.18em] text-[#F4EEDF]/70">
              {SITE_CONFIG.publicationName} · {SITE_CONFIG.totalEssays} Essays
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={SITE_CONFIG.links.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium uppercase tracking-[0.14em] bg-[#00D6C9] text-[#111111]"
              >
                <span>Visit Blog</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              <a
                href={SITE_CONFIG.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium uppercase tracking-[0.14em] border border-[#00D6C9] text-[#00D6C9]"
              >
                <Instagram className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Instagram</span>
              </a>
              <a
                href={SITE_CONFIG.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium uppercase tracking-[0.14em] border border-[#F4EEDF]/40 text-[#F4EEDF]"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
