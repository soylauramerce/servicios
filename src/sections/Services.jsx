import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";
import ServiceCard from "../components/ServiceCard";
import { servicesIntro } from "../data/content";
import { services } from "../data/services";

export default function Services() {
  return (
    <section id="servicios" className="bg-cream-deep py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-xl">
          <Reveal>
            <SectionLabel>{servicesIntro.label}</SectionLabel>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-6 font-display text-4xl text-ink md:text-5xl">{servicesIntro.title}</h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-5 text-lg text-ink-soft">{servicesIntro.sub}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={Math.min((i % 3) + 1, 3)} className={service.featured ? "md:col-span-2" : ""}>
              <ServiceCard service={service} featured={service.featured} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
