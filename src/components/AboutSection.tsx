import { ArrowUpRight, Instagram } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-[#111111] text-[#F4EEDF] border-b rule-ivory scroll-mt-24"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-10 py-16 sm:py-22 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
          {/* Left Sticky Author Plate */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-8">
            <Reveal>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold tracking-[0.22em] text-[#111111] bg-[#00D6C9] px-2 py-0.5">
                    03
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.24em] font-medium text-[#F4EEDF]/75">
                    Author Profile
                  </span>
                </div>
                <h2
                  id="about-heading"
                  className="font-serif text-4xl sm:text-5xl font-medium tracking-[-0.02em] leading-[1.04] text-[#F4EEDF]"
                >
                  About the Writer
                </h2>
              </div>

              {/* Architectural Typographic Monogram Plate */}
              <div className="mt-8 border rule-ivory p-7 sm:p-8 relative">
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 w-10 h-[3px] bg-[#00D6C9]"
                />
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 w-[3px] h-10 bg-[#00D6C9]"
                />

                <p className="font-serif text-6xl sm:text-7xl font-normal tracking-tight text-[#F4EEDF] leading-none">
                  {SITE_CONFIG.shortMonogram}
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[#00D6C9]">
                  {SITE_CONFIG.authorName}
                </p>

                <dl className="mt-7 pt-6 border-t rule-ivory space-y-3 text-xs">
                  <div className="flex justify-between gap-4">
                    <dt className="uppercase tracking-[0.16em] text-[#F4EEDF]/60">
                      Publication
                    </dt>
                    <dd className="text-right text-[#F4EEDF] font-medium">
                      {SITE_CONFIG.publicationName}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="uppercase tracking-[0.16em] text-[#F4EEDF]/60">
                      Blogger Identity
                    </dt>
                    <dd className="text-right text-[#F4EEDF]">
                      {SITE_CONFIG.penSignature}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="uppercase tracking-[0.16em] text-[#F4EEDF]/60">
                      Instagram
                    </dt>
                    <dd className="text-right">
                      <a
                        href={SITE_CONFIG.links.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="editorial-underline text-[#00D6C9] font-medium"
                      >
                        {SITE_CONFIG.instagramHandle}
                      </a>
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="uppercase tracking-[0.16em] text-[#F4EEDF]/60">
                      Publishing Since
                    </dt>
                    <dd className="text-right text-[#F4EEDF]">March 2026</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="uppercase tracking-[0.16em] text-[#F4EEDF]/60">
                      Archive
                    </dt>
                    <dd className="text-right text-[#F4EEDF]">
                      {SITE_CONFIG.totalEssays} Published Pieces
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 pt-5 border-t rule-ivory flex flex-wrap gap-2.5">
                  <a
                    href={SITE_CONFIG.links.blog}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] bg-[#00D6C9] text-[#111111] hover:bg-[#F4EEDF] transition-colors"
                  >
                    <span>Read Blog</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                  <a
                    href={SITE_CONFIG.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-[11px] font-medium uppercase tracking-[0.15em] border border-[#00D6C9]/60 text-[#00D6C9] hover:bg-[#00D6C9] hover:text-[#111111] transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={SITE_CONFIG.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-[11px] font-medium uppercase tracking-[0.15em] border border-[#F4EEDF]/40 text-[#F4EEDF] hover:border-[#00D6C9] hover:text-[#00D6C9] transition-colors"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Editorial Narrative */}
          <div className="lg:col-span-8 lg:pl-6 space-y-8">
            <Reveal delayMs={80}>
              <p className="font-serif text-2xl sm:text-3xl lg:text-[2.1rem] leading-[1.35] text-[#F4EEDF] font-normal">
                Keshika K S is an essayist and observer writing at the
                intersection of inner life and everyday culture—turning the
                questions most people swallow at two in the morning into lucid,
                unhurried prose.
              </p>
            </Reveal>

            <Reveal delayMs={120}>
              <div className="space-y-6 text-base sm:text-[17px] leading-[1.85] text-[#F4EEDF]/80 max-w-[64ch]">
                <p>
                  Through her publication,{" "}
                  <em className="font-serif italic text-xl text-[#F4EEDF]">
                    {SITE_CONFIG.publicationName}
                  </em>{" "}
                  and her companion Instagram presence{" "}
                  <a
                    href={SITE_CONFIG.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="editorial-underline text-[#00D6C9]"
                  >
                    {SITE_CONFIG.instagramHandle}
                  </a>{" "}
                  (both carrying her writing identity,{" "}
                  <span className="text-[#F4EEDF]">{SITE_CONFIG.penSignature}</span>
                  ), she examines the quiet mechanics of being human: why people
                  delete honest messages before sending “all good,” why rest
                  provokes guilt, what emotional exhaustion looks like beneath
                  politeness, and how rejection and solitude reshape a person’s
                  sense of self.
                </p>

                <p>
                  Her perspective is rooted in lived observation—writing candidly
                  from a student and young adult lens in India, and speaking
                  honestly about Tamil Nadu classrooms, South Asian family
                  silence, the pressure of rote education, and the unspoken
                  double standards placed on girls and ambitious women. Rather
                  than claiming clinical authority, she pairs personal reflection
                  with accessible psychological ideas—such as emotional
                  suppression, compassion fatigue, attachment patterns, and flow
                  state—to make tangled feelings legible.
                </p>

                <p>
                  Read chronologically since March-2026, her 24
                  published pieces trace a distinct evolution in voice: moving
                  from urgent late-night self-questioning into sustained,
                  empathetic social essays and, more recently, distilled
                  meditations on boundaries, aftermath, and choosing one’s life
                  with open eyes.
                </p>
              </div>
            </Reveal>

            {/* Thematic Pillars Strip */}
            <Reveal delayMs={160}>
              <div className="pt-8 border-t rule-ivory grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#00D6C9] font-medium">
                    Voice
                  </p>
                  <p className="font-serif text-xl text-[#F4EEDF]">
                    Reflective &amp; Unflinching
                  </p>
                  <p className="text-sm leading-relaxed text-[#F4EEDF]/70">
                    Direct without cruelty; tender without avoiding hard truths.
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#00D6C9] font-medium">
                    Focus
                  </p>
                  <p className="font-serif text-xl text-[#F4EEDF]">
                    Self &amp; Society
                  </p>
                  <p className="text-sm leading-relaxed text-[#F4EEDF]/70">
                    Bridging private emotional life with family, gender, and
                    cultural expectations.
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#00D6C9] font-medium">
                    Craft
                  </p>
                  <p className="font-serif text-xl text-[#F4EEDF]">
                    Long-Form &amp; Notes
                  </p>
                  <p className="text-sm leading-relaxed text-[#F4EEDF]/70">
                    From concise 200-word reflections to 1,700-word structured
                    essays.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
