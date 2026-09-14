import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";
import { about } from "../data/content";

export default function About() {
  return (
    <section id="sobre-mi" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-14 md:grid-cols-[0.85fr_1.15fr] md:items-center md:gap-16">
          <Reveal className="img-zoom relative aspect-[4/5] overflow-hidden rounded-3xl">
            {/* TODO: reemplazar por foto profesional real de Merce */}
            <img
              src="/images/about/about-merce.svg"
              alt="Retrato de Merce, maquilladora profesional"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </Reveal>

          <div>
            <Reveal>
              <SectionLabel>{about.label}</SectionLabel>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-6 font-display text-4xl text-ink md:text-5xl">{about.title}</h2>
            </Reveal>

            <div className="mt-7 space-y-4">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={Math.min(i + 1, 3)}>
                  <p className="text-[16px] leading-relaxed text-ink-soft md:text-lg">{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={3}>
              <div className="mt-9 border-l-2 border-fuchsia/40 pl-5">
                <p className="font-display text-2xl italic text-ink">{about.signatureLine}</p>
                <p className="text-sm text-ink-soft/70">{about.signatureRole}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
