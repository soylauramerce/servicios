import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";
import { studioExperience } from "../data/content";

export default function StudioExperience() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-cream md:py-32">
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-fuchsia/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-wine/25 blur-3xl" />

      <div className="relative mx-auto max-w-2xl px-6 text-center md:px-10">
        <Reveal>
          <SectionLabel light>{studioExperience.label}</SectionLabel>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-6 font-display text-4xl md:text-5xl">{studioExperience.title}</h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mx-auto mt-6 max-w-lg text-lg text-cream/75">{studioExperience.intro}</p>
        </Reveal>

        <Reveal delay={3}>
          <ul className="mx-auto mt-9 inline-block text-left">
            {studioExperience.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 py-1.5 text-[15px] text-cream/85">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-pink" />
                {benefit}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={3}>
          <div className="mx-auto mt-10 max-w-md rounded-2xl border border-cream/15 bg-cream/5 p-6">
            <p className="text-[13px] uppercase tracking-[0.14em] text-pink">{studioExperience.addressLabel}</p>
            <p className="mt-1 font-display text-xl">{studioExperience.addressLine}</p>
            <p className="mt-3 text-sm text-cream/60">{studioExperience.note}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.1em] text-cream/45">
              {studioExperience.disclaimer}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
