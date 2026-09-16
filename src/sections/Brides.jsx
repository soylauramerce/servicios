import Button from "../components/Button";
import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";
import { buildWhatsappUrl, siteConfig } from "../data/siteConfig";
import { brides } from "../data/content";

export default function Brides() {
  return (
    <section className="relative overflow-hidden bg-blush py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-white/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-14 md:grid-cols-2 md:items-center md:gap-16">
          <div className="order-2 grid grid-cols-2 gap-4 md:order-1">
            <Reveal className="img-zoom aspect-[3/4] overflow-hidden rounded-3xl">
              {/* TODO: reemplazar por fotografía real de novia maquillada por Merce */}
              <img
                src="images/brides/brides-01.svg"
                alt="Maquillaje de novia realizado por Merce"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </Reveal>
            <Reveal delay={1} className="img-zoom mt-10 aspect-[3/4] overflow-hidden rounded-3xl">
              <img
                src="images/brides/brides-02.svg"
                alt="Detalle de maquillaje de novia"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </Reveal>
          </div>

          <div className="order-1 md:order-2">
            <Reveal>
              <SectionLabel>{brides.label}</SectionLabel>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-6 font-display text-4xl italic text-wine md:text-5xl">{brides.title}</h2>
            </Reveal>

            <div className="mt-7 space-y-4">
              {brides.paragraphs.map((p, i) => (
                <Reveal key={i} delay={Math.min(i + 1, 3)}>
                  <p className="text-[16px] leading-relaxed text-ink-soft md:text-lg">{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={3}>
              <Button
                as="a"
                href={buildWhatsappUrl(siteConfig.whatsappMessages.novias)}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="mt-9"
              >
                {brides.cta}
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
