import { useCallback, useEffect } from "react";

/**
 * Lightbox accesible para el portafolio.
 * items: array de { image, alt }; index: posición activa; onClose/onNav.
 */
export default function Lightbox({ items, index, onClose, onNavigate }) {
  const goPrev = useCallback(() => {
    onNavigate((index - 1 + items.length) % items.length);
  }, [index, items.length, onNavigate]);

  const goNext = useCallback(() => {
    onNavigate((index + 1) % items.length);
  }, [index, items.length, onNavigate]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, goPrev, goNext]);

  const item = items[index];
  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Vista de imagen del portafolio"
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/92 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Cerrar"
        onClick={onClose}
        className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full text-cream/80 transition-colors hover:bg-cream/10 hover:text-cream"
      >
        <CloseIcon />
      </button>

      <button
        type="button"
        aria-label="Imagen anterior"
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
        className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-cream/80 transition-colors hover:bg-cream/10 hover:text-cream md:left-6"
      >
        <ArrowIcon direction="left" />
      </button>

      <button
        type="button"
        aria-label="Imagen siguiente"
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-cream/80 transition-colors hover:bg-cream/10 hover:text-cream md:right-6"
      >
        <ArrowIcon direction="right" />
      </button>

      <figure
        className="mx-auto max-h-[85vh] max-w-[88vw] md:max-w-[70vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.image}
          alt={item.alt}
          className="max-h-[85vh] w-auto rounded-lg object-contain shadow-2xl"
        />
        <figcaption className="mt-3 text-center text-sm text-cream/60">{item.alt}</figcaption>
      </figure>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ArrowIcon({ direction }) {
  const d = direction === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7";
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={d} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
