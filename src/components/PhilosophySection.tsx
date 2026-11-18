import { WRITING_PHILOSOPHY } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function PhilosophySection() {
  return (
    <section
      id="philosophy"
      aria-labelledby="philosophy-heading"
      className="bg-[#F4EEDF] text-[#111111] border-b rule-ink scroll-mt-24"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-10 py-16 sm:py-22 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
          {/* Left Sticky Editorial Framing */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-5">
            <Reveal>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold tracking-[0.22em] text-[#00D6C9] bg-[#111111] px-2 py-0.5">
                  04
                </span>
                <span className="text-[11px] uppercase tracking-[0.24em] font-medium text-[#111111]/75">
                  Approach to Writing
                </span>
              </div>
              <h2
                id="philosophy-heading"
                className="font-serif text-4xl sm:text-5xl font-medium tracking-[-0.02em] leading-[1.04]"
              >
                Writing Philosophy
              </h2>
              <p className="mt-5 text-base leading-[1.75] text-[#111111]/80">
                Five recurring commitments visible across her archive—shaping
                both the questions she chooses to ask and the honesty with which
                she stays inside them.
              </p>
              <div
                aria-hidden="true"
                className="mt-8 w-16 h-[3px] bg-[#00D6C9]"
              />
            </Reveal>
          </div>

          {/* Right 5-Part Literary Manifesto */}
          <div className="lg:col-span-8 border-t rule-ink-strong">
            {WRITING_PHILOSOPHY.map((pillar, index) => (
              <Reveal key={pillar.number} delayMs={index * 45}>
                <article className="py-8 sm:py-10 border-b rule-ink grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-start">
                  <div className="sm:col-span-2 flex items-center gap-2.5">
                    <span className="font-serif text-3xl sm:text-4xl font-medium text-[#111111] leading-none">
                      {pillar.number}
                    </span>
                    <span
                      aria-hidden="true"
                      className="w-2 h-2 bg-[#00D6C9]"
                    />
                  </div>

                  <div className="sm:col-span-10 space-y-3">
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium leading-[1.16] tracking-[-0.01em] text-[#111111]">
                      {pillar.title}
                    </h3>
                    <p className="font-serif italic text-lg sm:text-xl text-[#111111] border-l-2 border-[#00D6C9] pl-4 py-0.5">
                      {pillar.statement}
                    </p>
                    <p className="text-[15px] sm:text-base leading-[1.8] text-[#111111]/80 max-w-[60ch]">
                      {pillar.reflection}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
