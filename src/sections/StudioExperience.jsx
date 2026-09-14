import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";
import { studioExperience } from "../data/content";

export default function StudioExperience() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-cream md:py-32">
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-fuchsia/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center md:gap-10 md:px-10">
        <div>
          <Reveal>
            <SectionLabel light>{studioExperience.label}</SectionLabel>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">{studioExperience.title}</h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 text-lg text-cream/75">{studioExperience.intro}</p>
          </Reveal>

          <Reveal delay={3}>
            <ul className="mt-9 space-y-4">
              {studioExperience.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-[15px] text-cream/85">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-pink" />
                  {benefit}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-10 rounded-2xl border border-cream/15 bg-cream/5 p-5">
              <p className="text-[13px] uppercase tracking-[0.14em] text-pink">{studioExperience.addressLabel}</p>
              <p className="mt-1 font-display text-xl">{studioExperience.addressLine}</p>
              <p className="mt-3 text-sm text-cream/60">{studioExperience.note}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.1em] text-cream/45">
                {studioExperience.disclaimer}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="relative">
          <Reveal className="img-zoom relative aspect-[4/3] overflow-hidden rounded-3xl md:aspect-[6/5]">
            {/* TODO: reemplazar por fotografías reales del estudio */}
            <img
              src="/images/studio/studio-01.svg"
              alt="Interior del estudio de maquillaje de Merce en Armenia"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </Reveal>

          <Reveal delay={2} className="absolute -bottom-10 -left-8 hidden w-40 overflow-hidden rounded-2xl border-4 border-ink shadow-xl sm:block md:w-48">
            <img
              src="/images/studio/studio-02.svg"
              alt="Detalle del estudio de Merce"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
