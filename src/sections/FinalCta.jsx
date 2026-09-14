import Button from "../components/Button";
import Reveal from "../components/Reveal";
import { buildWhatsappUrl, siteConfig } from "../data/siteConfig";
import { finalCta } from "../data/content";

export default function FinalCta() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-fuchsia py-24 text-cream md:py-32">
      <div className="pointer-events-none absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 h-80 w-80 rounded-full bg-wine/20 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6 text-center md:px-10">
        <Reveal>
          <p className="text-[13px] uppercase tracking-[0.24em] text-cream/70">{finalCta.sub}</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-5 font-display text-4xl leading-tight text-balance md:text-6xl">
            {finalCta.title}
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
            <Button as="a" href="#servicios" variant="outlineLight" className="!text-cream">
              {finalCta.ctaPrimary}
            </Button>
            <Button
              as="a"
              href={buildWhatsappUrl(siteConfig.whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlineLight"
              className="!bg-cream !text-fuchsia !border-cream hover:!bg-cream/90"
            >
              {finalCta.ctaSecondary}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
