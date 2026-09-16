import Button from "../components/Button";
import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";
import { buildWhatsappUrl, siteConfig } from "../data/siteConfig";
import { location } from "../data/content";

export default function Location() {
  return (
    <section id="ubicacion" className="bg-ink py-24 text-cream md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <Reveal>
          <SectionLabel light>{location.label}</SectionLabel>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-6 font-display text-4xl md:text-5xl">{location.title}</h2>
        </Reveal>

        <Reveal delay={2}>
          <p className="mt-8 text-[13px] uppercase tracking-[0.2em] text-pink">{location.region}</p>
          <p className="mt-1 font-display text-2xl">{location.zone}</p>
          <p className="mx-auto mt-6 max-w-sm text-sm uppercase tracking-[0.08em] text-cream/50">
            {location.disclaimer}
          </p>
        </Reveal>

        <Reveal delay={3}>
          <Button
            as="a"
            href={buildWhatsappUrl(siteConfig.whatsappMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlineLight"
            className="mt-9"
          >
            Escríbeme para la ubicación exacta
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
