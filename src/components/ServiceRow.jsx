import Button from "./Button";
import { buildWhatsappUrl, siteConfig } from "../data/siteConfig";

/**
 * Fila de servicio (sin imagen propia) para el layout de foto fija + lista
 * que se usa en la sección de Servicios. `active` resalta la fila que está
 * centrada en el viewport mientras se hace scroll.
 */
export default function ServiceRow({ service, active, registerRef }) {
  const whatsappUrl = buildWhatsappUrl(siteConfig.whatsappMessages[service.whatsappKey]);

  return (
    <article
      ref={registerRef}
      data-service-id={service.id}
      className={`border-b border-ink/10 py-10 transition-all duration-500 first:pt-0 last:border-b-0 ${
        active ? "opacity-100" : "opacity-45"
      }`}
    >
      <p className={`text-[11px] uppercase tracking-[0.2em] transition-colors duration-500 ${active ? "text-fuchsia" : "text-ink-soft/60"}`}>
        {service.eyebrow}
      </p>
      <h3 className="mt-3 font-display text-3xl text-ink md:text-4xl">{service.name}</h3>
      <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft">{service.description}</p>

      <div className="mt-6 flex flex-wrap items-center gap-6">
        <div>
          <p className="font-display text-xl text-fuchsia">{service.price}</p>
          {service.priceNote && <p className="mt-0.5 text-sm text-ink-soft/80">{service.priceNote}</p>}
        </div>

        <Button as="a" href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="outline">
          {service.cta}
        </Button>
      </div>
    </article>
  );
}
