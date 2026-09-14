import Button from "./Button";
import { buildWhatsappUrl, siteConfig } from "../data/siteConfig";

export default function ServiceCard({ service, featured = false }) {
  const whatsappUrl = buildWhatsappUrl(siteConfig.whatsappMessages[service.whatsappKey]);

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-3xl bg-white/60 ring-1 ring-ink/5 transition-shadow duration-500 hover:shadow-xl hover:shadow-wine/10 ${
        featured ? "md:col-span-2 md:flex-row" : ""
      }`}
    >
      <div className={`img-zoom relative ${featured ? "aspect-[16/10] md:aspect-auto md:w-1/2" : "aspect-[4/5]"}`}>
        <img src={service.image} alt={service.imageAlt} className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 text-[11px] uppercase tracking-[0.16em] text-cream/90">
          {service.eyebrow}
        </span>
      </div>

      <div className={`flex flex-1 flex-col justify-between gap-5 p-7 ${featured ? "md:p-10" : ""}`}>
        <div>
          <h3 className="font-display text-2xl text-ink md:text-[1.7rem]">{service.name}</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{service.description}</p>
        </div>

        <div>
          <p className="font-display text-xl text-fuchsia">{service.price}</p>
          {service.priceNote && <p className="mt-0.5 text-sm text-ink-soft/80">{service.priceNote}</p>}

          <Button as="a" href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="outline" className="mt-5">
            {service.cta}
          </Button>
        </div>
      </div>
    </article>
  );
}
