import { useEffect, useRef, useState } from "react";
import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";
import ServiceRow from "../components/ServiceRow";
import { servicesIntro } from "../data/content";
import { services } from "../data/services";

// Foto única para toda la sección (en vez de una por servicio) mientras no
// existan fotos reales para cada categoría. Para volver a una foto por
// servicio, usa el campo `image` de cada objeto en src/data/services.js.
const SERVICES_IMAGE = "images/services/social.jpg";
const SERVICES_IMAGE_ALT = "Maquillaje realizado por Merce";

export default function Services() {
  const [activeId, setActiveId] = useState(services[0].id);
  const rowRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.dataset.serviceId);
          }
        });
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: 0 }
    );

    Object.values(rowRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

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

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal className="img-zoom relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-xl shadow-wine/10">
              <img src={SERVICES_IMAGE} alt={SERVICES_IMAGE_ALT} className="h-full w-full object-cover" loading="lazy" />
            </Reveal>
          </div>

          <div>
            {services.map((service) => (
              <ServiceRow
                key={service.id}
                service={service}
                active={activeId === service.id}
                registerRef={(el) => {
                  rowRefs.current[service.id] = el;
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
