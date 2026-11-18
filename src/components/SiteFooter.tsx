import Link from "next/link";
import { ArrowUpRight, Instagram } from "lucide-react";
import { NAV_ITEMS, SITE_CONFIG } from "@/data/site";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-[#F4EEDF] border-t-2 border-[#00D6C9]">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-10 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b rule-ivory">
          {/* Identity column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span
                className="inline-block w-2 h-2 bg-[#00D6C9]"
                aria-hidden="true"
              />
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#00D6C9] font-medium">
                Writer’s Portfolio
              </span>
            </div>
            <Link
              href="/"
              className="block font-serif text-4xl sm:text-5xl font-medium tracking-tight text-[#F4EEDF]"
            >
              {SITE_CONFIG.authorName}
            </Link>
            <p className="text-sm leading-relaxed text-[#F4EEDF]/75 max-w-sm">
              Essays, reflections, and social observations originally published
              on{" "}
              <em className="font-serif italic text-base text-[#F4EEDF]">
                {SITE_CONFIG.publicationName}
              </em>
              .
            </p>
          </div>

          {/* Navigation column */}
          <div className="md:col-span-3 space-y-4">
            <h2 className="text-[11px] uppercase tracking-[0.22em] text-[#00D6C9] font-medium">
              Sections
            </h2>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/"
                  className="editorial-underline text-sm text-[#F4EEDF]/85 hover:text-[#F4EEDF] transition-colors"
                >
                  Home
                </Link>
              </li>
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="editorial-underline text-sm text-[#F4EEDF]/85 hover:text-[#F4EEDF] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#beyond-the-pages"
                  className="editorial-underline text-sm text-[#F4EEDF]/85 hover:text-[#F4EEDF] transition-colors"
                >
                  Beyond the Pages
                </Link>
              </li>
            </ul>
          </div>

          {/* External presence column */}
          <div className="md:col-span-4 space-y-4">
            <h2 className="text-[11px] uppercase tracking-[0.22em] text-[#00D6C9] font-medium">
              Elsewhere
            </h2>
            <ul className="space-y-3">
              <li>
                <a
                  href={SITE_CONFIG.links.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-2.5 border-b rule-ivory text-sm text-[#F4EEDF] hover:border-[#00D6C9] transition-colors"
                >
                  <span>
                    Blog —{" "}
                    <span className="font-serif italic text-base">
                      {SITE_CONFIG.publicationName}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="w-4 h-4 text-[#00D6C9] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-2.5 border-b rule-ivory text-sm text-[#F4EEDF] hover:border-[#00D6C9] transition-colors"
                >
                  <span className="inline-flex items-center gap-2">
                    <Instagram
                      className="w-4 h-4 text-[#00D6C9]"
                      aria-hidden="true"
                    />
                    <span>Instagram — {SITE_CONFIG.instagramHandle}</span>
                  </span>
                  <ArrowUpRight
                    className="w-4 h-4 text-[#00D6C9] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-2.5 border-b rule-ivory text-sm text-[#F4EEDF] hover:border-[#00D6C9] transition-colors"
                >
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight
                    className="w-4 h-4 text-[#00D6C9] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#F4EEDF]/65 tracking-[0.06em]">
          <p>
            © {currentYear} {SITE_CONFIG.authorName}. All writings belong to the
            author.
          </p>
          <p className="uppercase tracking-[0.16em] text-[11px]">
            {SITE_CONFIG.totalEssays} Essays · {SITE_CONFIG.archiveSpan}
          </p>
        </div>
      </div>
    </footer>
  );
}
