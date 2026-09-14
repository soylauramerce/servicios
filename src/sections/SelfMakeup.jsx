import Button from "../components/Button";
import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";
import { buildWhatsappUrl, siteConfig } from "../data/siteConfig";
import { selfMakeupIntro } from "../data/content";
import { selfMakeupWorkshop } from "../data/services";

export default function SelfMakeup() {
  return (
    <section id="automaquillaje" className="relative overflow-hidden bg-cream-deep py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-14 md:grid-cols-2 md:items-center md:gap-16">
          <div>
            <Reveal>
              <SectionLabel>{selfMakeupIntro.label}</SectionLabel>
            </Reveal>
            <Reveal delay={1}>
              <p className="mt-6 text-[13px] uppercase tracking-[0.2em] text-fuchsia">
                {selfMakeupIntro.eyebrow}
              </p>
              <h2 className="mt-2 font-display text-4xl text-ink md:text-5xl">{selfMakeupIntro.title}</h2>
            </Reveal>

            <Reveal delay={2}>
              <p className="mt-6 text-lg text-ink-soft">{selfMakeupWorkshop.description}</p>
            </Reveal>

            {/* Antes / después */}
            <Reveal delay={2}>
              <div className="mt-9 space-y-3 rounded-2xl bg-white/60 p-6 ring-1 ring-ink/5">
                <p className="text-sm text-ink-soft/70">
                  <span className="mr-2 text-[11px] uppercase tracking-[0.14em] text-ink-soft/50">Antes</span>
                  {selfMakeupIntro.before}
                </p>
                <div className="h-px bg-ink/10" />
                <p className="text-[15px] font-medium text-ink">
                  <span className="mr-2 text-[11px] uppercase tracking-[0.14em] text-fuchsia">Después</span>
                  {selfMakeupIntro.after}
                </p>
              </div>
            </Reveal>

            <Reveal delay={3}>
              <p className="mt-9 text-[13px] uppercase tracking-[0.14em] text-ink-soft/60">
                {selfMakeupIntro.audienceLabel}
              </p>
              <ul className="mt-4 space-y-3">
                {selfMakeupWorkshop.audience.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-[15px] text-ink-soft">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-fuchsia" />
                    {line}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={3}>
              <div className="mt-10 flex flex-wrap items-end gap-8">
                <div>
                  <p className="font-display text-3xl text-fuchsia">{selfMakeupWorkshop.price}</p>
                  <p className="text-sm text-ink-soft/70">Taller de Automaquillaje 1:1</p>
                </div>
                <div>
                  <p className="font-display text-2xl text-ink">{selfMakeupWorkshop.priceWithShopping}</p>
                  <p className="max-w-[220px] text-sm text-ink-soft/70">
                    {selfMakeupWorkshop.priceWithShoppingNote}
                  </p>
                </div>
              </div>

              <Button
                as="a"
                href={buildWhatsappUrl(siteConfig.whatsappMessages[selfMakeupWorkshop.whatsappKey])}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="mt-8"
              >
                {selfMakeupWorkshop.cta}
              </Button>
            </Reveal>
          </div>

          <div className="relative">
            <Reveal className="img-zoom relative aspect-[4/5] overflow-hidden rounded-3xl">
              <img
                src={selfMakeupWorkshop.image}
                alt={selfMakeupWorkshop.imageAlt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </Reveal>
            <Reveal delay={2} className="absolute -bottom-10 -right-6 hidden w-44 overflow-hidden rounded-2xl border-4 border-cream-deep shadow-xl sm:block md:w-52">
              <img
                src={selfMakeupWorkshop.imageDetail}
                alt={selfMakeupWorkshop.imageDetailAlt}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
