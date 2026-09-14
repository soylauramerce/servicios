import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";
import { siteConfig } from "../data/siteConfig";
import { location } from "../data/content";

export default function Location() {
  return (
    <section id="ubicacion" className="bg-ink py-24 text-cream md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <SectionLabel light>{location.label}</SectionLabel>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-6 font-display text-4xl md:text-5xl">{location.title}</h2>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal delay={2}>
            <p className="text-[13px] uppercase tracking-[0.2em] text-pink">{location.region}</p>
            <p className="mt-1 font-display text-2xl">{location.zone}</p>
            <p className="mt-4 text-cream/70">{siteConfig.studioAddress}</p>
            <p className="mt-6 max-w-sm text-sm uppercase tracking-[0.08em] text-cream/50">
              {location.disclaimer}
            </p>
          </Reveal>

          {/* Placeholder para integración futura con Google Maps.
              Reemplazar por: <iframe src={siteConfig.googleMapsEmbedUrl} ... /> */}
          <Reveal delay={2}>
            <div className="flex aspect-[4/3] items-center justify-center rounded-3xl border border-dashed border-cream/25 bg-cream/5 text-center">
              <p className="max-w-[220px] text-sm text-cream/50">
                Mapa disponible próximamente
                <br />
                <span className="text-cream/30">[Google Maps embed]</span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
