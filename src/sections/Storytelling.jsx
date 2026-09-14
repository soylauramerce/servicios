import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";
import { storytelling } from "../data/content";

export default function Storytelling() {
  return (
    <section className="relative bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <Reveal>
          <SectionLabel>{storytelling.label}</SectionLabel>
        </Reveal>

        <Reveal delay={1}>
          <h2 className="mt-6 font-display text-3xl text-ink md:text-4xl">{storytelling.title}</h2>
        </Reveal>

        <div className="mt-8 space-y-5 text-left sm:text-center">
          {storytelling.paragraphs.map((p, i) => (
            <Reveal key={i} delay={Math.min(i + 1, 3)}>
              <p className="text-[17px] leading-relaxed text-ink-soft md:text-lg">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Momento editorial: frase enorme a pantalla completa */}
      <Reveal className="mt-24 md:mt-32">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <p className="font-display text-4xl italic leading-tight text-fuchsia md:text-6xl">
            {storytelling.bigLine1}
          </p>
          <p className="mt-3 font-display text-4xl leading-tight text-ink md:text-6xl">
            {storytelling.bigLine2}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
