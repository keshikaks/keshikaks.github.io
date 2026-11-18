import { ArrowUpRight, Instagram } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function PresenceAndContactSection() {
  return (
    <>
      {/* Section F: Professional Presence */}
      <section
        id="presence"
        aria-labelledby="presence-heading"
        className="bg-[#F4EEDF] text-[#111111] border-b rule-ink scroll-mt-24"
      >
        <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold tracking-[0.22em] text-[#00D6C9] bg-[#111111] px-2 py-0.5">
                    06
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.24em] font-medium text-[#111111]/75">
                    Beyond the Archive
                  </span>
                </div>
                <h2
                  id="presence-heading"
                  className="font-serif text-4xl sm:text-5xl font-medium tracking-[-0.02em] leading-[1.04]"
                >
                  Professional Presence
                </h2>
                <p className="text-base leading-[1.75] text-[#111111]/80 max-w-md">
                  Writing is one dimension of Keshika K S’s work. Her broader
                  academic, professional, and collaborative profile lives on
                  LinkedIn alongside her active literary blog.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* LinkedIn Editorial Plate */}
                <div className="border rule-ink-strong p-6 sm:p-8 flex flex-col justify-between bg-[#F4EEDF]">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#111111]">
                        Professional Profile
                      </span>
                      <span
                        aria-hidden="true"
                        className="w-2 h-2 bg-[#00D6C9]"
                      />
                    </div>
                    <h3 className="font-serif text-3xl font-medium text-[#111111]">
                      LinkedIn
                    </h3>
                    <p className="text-sm leading-[1.75] text-[#111111]/75">
                      View Keshika K S’s current background, updates, and
                      professional network directly on LinkedIn.
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t rule-ink">
                    <a
                      href={SITE_CONFIG.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-between w-full text-xs font-semibold uppercase tracking-[0.16em] text-[#111111]"
                    >
                      <span className="editorial-underline">
                        Open LinkedIn Profile
                      </span>
                      <ArrowUpRight
                        className="w-4 h-4 text-[#00D6C9] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>

                {/* Blogger Editorial Plate */}
                <div className="border rule-ink p-6 sm:p-8 flex flex-col justify-between bg-[#111111] text-[#F4EEDF] border-t-[3px] border-t-[#00D6C9]">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#00D6C9]">
                        Primary Publication
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.16em] text-[#F4EEDF]/65">
                        Blogger
                      </span>
                    </div>
                    <h3 className="font-serif text-3xl font-medium text-[#F4EEDF]">
                      {SITE_CONFIG.publicationName}
                    </h3>
                    <p className="text-sm leading-[1.75] text-[#F4EEDF]/75">
                      Follow new essays as they are published and read reader
                      conversations directly on her original Blogger site.
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t rule-ivory">
                    <a
                      href={SITE_CONFIG.links.blog}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-between w-full text-xs font-semibold uppercase tracking-[0.16em] text-[#F4EEDF]"
                    >
                      <span className="editorial-underline">
                        Visit Original Blog
                      </span>
                      <ArrowUpRight
                        className="w-4 h-4 text-[#00D6C9] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section G: Contact */}
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="bg-[#F4EEDF] text-[#111111] scroll-mt-24"
      >
        <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-10 py-16 sm:py-22 lg:py-28">
          <Reveal>
            <div className="border-l-[3px] border-[#00D6C9] pl-6 sm:pl-10 lg:pl-14 max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold tracking-[0.22em] text-[#00D6C9] bg-[#111111] px-2 py-0.5">
                  07
                </span>
                <span className="text-[11px] uppercase tracking-[0.24em] font-medium text-[#111111]/75">
                  Correspondence
                </span>
              </div>

              <h2
                id="contact-heading"
                className="font-serif text-4xl sm:text-5xl lg:text-[3.75rem] font-medium tracking-[-0.02em] leading-[1.04]"
              >
                Start a conversation.
              </h2>

              <p className="mt-6 text-base sm:text-lg leading-[1.8] text-[#111111]/80 max-w-[56ch]">
                Whether you are a reader who recognised yourself in a line, an
                editor commissioning essays, a fellow writer, or someone looking
                to collaborate thoughtfully—you are welcome to connect via
                LinkedIn, follow{" "}
                <strong className="font-medium text-[#111111]">
                  {SITE_CONFIG.instagramHandle}
                </strong>{" "}
                on Instagram, or leave a note on her blog.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4 sm:gap-5">
                <a
                  href={SITE_CONFIG.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-7 py-4 bg-[#111111] text-[#F4EEDF] text-xs sm:text-[13px] font-medium uppercase tracking-[0.16em] border border-[#111111] hover:bg-[#00D6C9] hover:text-[#111111] hover:border-[#00D6C9] transition-colors duration-200"
                >
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>

                <a
                  href={SITE_CONFIG.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 px-6 py-4 bg-[#F4EEDF] text-[#111111] text-xs sm:text-[13px] font-medium uppercase tracking-[0.16em] border border-[#111111] hover:bg-[#00D6C9] hover:border-[#00D6C9] transition-colors duration-200"
                >
                  <Instagram className="w-4 h-4" aria-hidden="true" />
                  <span>{SITE_CONFIG.instagramHandle}</span>
                  <ArrowUpRight
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>

                <a
                  href={SITE_CONFIG.links.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 px-6 py-4 bg-[#F4EEDF] text-[#111111] text-xs sm:text-[13px] font-medium uppercase tracking-[0.16em] border border-[#111111] hover:border-[#00D6C9] transition-colors duration-200"
                >
                  <span>Comment on the Blog</span>
                  <ArrowUpRight
                    className="w-4 h-4 text-[#00D6C9] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
