import { useMemo, useState } from "react";
import Lightbox from "../components/Lightbox";
import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";
import { portfolioIntro } from "../data/content";
import { portfolioCategories, portfolioItems } from "../data/portfolio";

const SIZE_CLASSES = {
  tall: "aspect-[3/4]",
  wide: "aspect-[4/3]",
  square: "aspect-square",
};

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = useMemo(() => {
    if (activeCategory === "todos") return portfolioItems;
    return portfolioItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portafolio" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <SectionLabel>{portfolioIntro.label}</SectionLabel>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-6 font-display text-4xl text-ink md:text-5xl">{portfolioIntro.title}</h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-4 text-lg text-ink-soft">{portfolioIntro.sub}</p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={2}>
          <div className="mt-10 flex flex-wrap gap-3" role="group" aria-label="Filtrar portafolio por categoría">
            {portfolioCategories.map((cat) => {
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  aria-pressed={active}
                  className={`rounded-full px-5 py-2 text-[12px] uppercase tracking-[0.12em] font-medium transition-colors duration-300 ${
                    active
                      ? "bg-fuchsia text-cream"
                      : "bg-transparent text-ink-soft ring-1 ring-ink/15 hover:ring-fuchsia/50 hover:text-fuchsia"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {filtered.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setLightboxIndex(i)}
              className={`img-zoom group relative mb-5 block w-full overflow-hidden rounded-2xl ${SIZE_CLASSES[item.size]} break-inside-avoid`}
              aria-label={`Ver imagen: ${item.alt}`}
            >
              <img src={item.image} alt={item.alt} className="h-full w-full object-cover" loading="lazy" />
              <span className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
              <span className="absolute bottom-3 left-4 text-[11px] uppercase tracking-[0.14em] text-cream opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                {portfolioCategories.find((c) => c.id === item.category)?.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={filtered}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  );
}
