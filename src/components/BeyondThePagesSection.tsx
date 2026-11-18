import { ArrowUpRight, Instagram } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function BeyondThePagesSection() {
  return (
    <section
      id="beyond-the-pages"
      aria-labelledby="beyond-heading"
      className="bg-[#111111] text-[#F4EEDF] border-b rule-ivory scroll-mt-24"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-10 py-16 sm:py-22 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Editorial Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold tracking-[0.22em] text-[#111111] bg-[#00D6C9] px-2 py-0.5">
                  05
                </span>
                <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] font-medium text-[#00D6C9]">
                  <Instagram className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{SITE_CONFIG.instagramHandle}</span>
                </span>
              </div>

              <h2
                id="beyond-heading"
                className="font-serif text-4xl sm:text-5xl lg:text-[3.6rem] font-medium tracking-[-0.02em] leading-[1.03] text-[#F4EEDF]"
              >
                Beyond the Pages
              </h2>

              <p className="mt-5 font-serif italic text-2xl sm:text-[1.7rem] leading-[1.35] text-[#F4EEDF]/95 border-l-2 border-[#00D6C9] pl-5 max-w-[34ch]">
                The same reflective voice, carried beyond the long-form archive.
              </p>

              <div className="mt-7 space-y-5 text-base sm:text-[17px] leading-[1.85] text-[#F4EEDF]/80 max-w-[60ch]">
                <p>
                  While{" "}
                  <em className="font-serif italic text-xl text-[#F4EEDF]">
                    {SITE_CONFIG.publicationName}
                  </em>{" "}
                  holds her complete long-form essays and structured reflections,{" "}
                  <strong className="font-medium text-[#F4EEDF]">
                    {SITE_CONFIG.instagramHandle}
                  </strong>{" "}
                  extends that same writing identity—
                  <span className="text-[#F4EEDF]">
                    {SITE_CONFIG.penSignature}
                  </span>
                  —into a living, everyday space for readers who connect with
                  her work.
                </p>

                <p>
                  Linked directly from her published blog essays, the Instagram
                  page acts as a companion to the archive rather than a separate
                  persona: one continuous thread of honest observation,
                  emotional clarity, and reader conversation across platforms.
                </p>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-4 sm:gap-6">
                <a
                  href={SITE_CONFIG.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-7 py-4 bg-[#00D6C9] text-[#111111] text-xs sm:text-[13px] font-semibold uppercase tracking-[0.16em] border border-[#00D6C9] hover:bg-[#F4EEDF] hover:border-[#F4EEDF] transition-colors duration-200"
                >
                  <Instagram className="w-4 h-4" aria-hidden="true" />
                  <span>Follow on Instagram</span>
                  <ArrowUpRight
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>

                <a
                  href={SITE_CONFIG.links.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-underline inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-[#F4EEDF]/80 hover:text-[#F4EEDF]"
                >
                  <span>Read Full Essays on Blogger</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Typography-Led Editorial Specimen Plate */}
          <div className="lg:col-span-5">
            <Reveal delayMs={100}>
              <div className="border rule-ivory border-t-[3px] border-t-[#00D6C9] p-7 sm:p-9 bg-[#111111] relative">
                {/* Top handle bar */}
                <div className="flex items-center justify-between gap-4 pb-5 border-b rule-ivory">
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex items-center justify-center w-8 h-8 border border-[#00D6C9] text-[#00D6C9]">
                      <Instagram className="w-4 h-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold tracking-[0.06em] text-[#F4EEDF]">
                        {SITE_CONFIG.instagramHandle}
                      </p>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#F4EEDF]/60">
                        Instagram Profile
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#00D6C9] font-medium">
                    Companion
                  </span>
                </div>

                {/* Editorial Typographic Centerpiece */}
                <div className="py-8 border-b rule-ivory space-y-3">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#F4EEDF]/60">
                    Writing Identity
                  </p>
                  <p className="font-serif text-4xl sm:text-[2.75rem] font-normal italic leading-[1.08] text-[#F4EEDF]">
                    {SITE_CONFIG.penSignature}
                  </p>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#00D6C9] pt-1">
                    By {SITE_CONFIG.authorName}
                  </p>
                </div>

                {/* Two-space Editorial Relationship Ledger */}
                <div className="py-6 border-b rule-ivory grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#00D6C9] font-semibold">
                      Long-Form Archive
                    </p>
                    <p className="font-serif text-xl text-[#F4EEDF]">
                      Blogger
                    </p>
                    <p className="text-xs leading-relaxed text-[#F4EEDF]/70">
                      Complete essays, structured observations, and deep
                      reflections.
                    </p>
                  </div>

                  <div className="space-y-1.5 sm:border-l rule-ivory sm:pl-6">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#00D6C9] font-semibold">
                      Ongoing Presence
                    </p>
                    <p className="font-serif text-xl text-[#F4EEDF]">
                      Instagram
                    </p>
                    <p className="text-xs leading-relaxed text-[#F4EEDF]/70">
                      Her creative voice and direct connection with readers
                      under {SITE_CONFIG.instagramHandle}.
                    </p>
                  </div>
                </div>

                {/* Bottom Direct Profile Link */}
                <div className="pt-5">
                  <a
                    href={SITE_CONFIG.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 text-xs uppercase tracking-[0.16em] text-[#F4EEDF] hover:text-[#00D6C9] transition-colors"
                  >
                    <span className="truncate font-medium">
                      instagram.com/herthoughtsbykesh
                    </span>
                    <span className="shrink-0 inline-flex items-center gap-1 text-[#00D6C9]">
                      <span>Open</span>
                      <ArrowUpRight
                        className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
