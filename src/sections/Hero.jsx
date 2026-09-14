import Button from "../components/Button";
import { hero } from "../data/content";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Decorativos: blobs orgánicos en rosa */}
      <div className="pointer-events-none absolute -top-24 -left-32 h-96 w-96 rounded-full bg-blush/70 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[28rem] w-[28rem] rounded-full bg-pink/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-8 md:px-10">
        {/* Columna de texto */}
        <div className="relative z-10 order-2 md:order-1">
          <p className="text-[12px] uppercase tracking-[0.3em] text-fuchsia font-medium">
            {hero.kicker}
          </p>

          <h1 className="mt-6 text-balance font-display text-[2.6rem] leading-[1.05] text-ink sm:text-6xl md:text-[3.6rem] lg:text-[4rem]">
            {hero.headline}
            <br />
            <span className="italic text-fuchsia">{hero.headlineAccent}</span>
          </h1>

          <p className="mt-7 max-w-md text-lg text-ink-soft">{hero.sub}</p>
          <p className="mt-3 max-w-md text-[13px] uppercase tracking-[0.08em] text-ink-soft/70">
            {hero.services}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button as="a" href="#contacto" variant="primary">
              {hero.ctaPrimary}
            </Button>
            <Button as="a" href="#portafolio" variant="outline">
              {hero.ctaSecondary}
            </Button>
          </div>
        </div>

        {/* Columna visual */}
        <div className="relative order-1 md:order-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] shadow-2xl shadow-wine/10 md:max-w-none">
            {/* TODO: reemplazar por foto real de Merce o de un maquillaje realizado por ella */}
            <img
              src="/images/hero/hero-main.svg"
              alt="Maquillaje realizado por Merce"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-8 -left-8 hidden aspect-square w-32 overflow-hidden rounded-2xl border-4 border-cream shadow-xl sm:block md:w-40">
            <img
              src="/images/hero/hero-secondary.svg"
              alt="Detalle de maquillaje realizado por Merce"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -top-6 right-6 flex items-center gap-2 rounded-full bg-cream/90 px-4 py-2 shadow-lg backdrop-blur-sm">
            <StarIcon />
            <span className="text-[11px] uppercase tracking-[0.12em] text-ink">Estudio propio</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2l2.2 6.8L21 11l-6.8 2.2L12 20l-2.2-6.8L3 11l6.8-2.2L12 2Z"
        fill="#C81F63"
      />
    </svg>
  );
}
