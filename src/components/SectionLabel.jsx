/** Etiqueta editorial pequeña usada como "número de sección" en cada bloque. */
export default function SectionLabel({ children, light = false }) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] font-medium ${
        light ? "text-cream/70" : "text-fuchsia"
      }`}
    >
      <span className={`h-px w-8 ${light ? "bg-cream/50" : "bg-fuchsia/50"}`} />
      {children}
    </span>
  );
}
