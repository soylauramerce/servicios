import { useReveal } from "../hooks/useReveal";

/**
 * Envuelve cualquier contenido y lo anima al entrar en el viewport.
 * Uso: <Reveal delay={1}><h2>Título</h2></Reveal>
 */
export default function Reveal({ children, as: Tag = "div", delay = 0, className = "", ...props }) {
  const [ref, visible] = useReveal();
  const delayClass = delay ? `reveal-delay-${delay}` : "";

  return (
    <Tag
      ref={ref}
      className={`reveal ${delayClass} ${visible ? "reveal-visible" : ""} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
