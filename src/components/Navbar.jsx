import { useEffect, useState } from "react";
import { siteConfig } from "../data/siteConfig";

const LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#automaquillaje", label: "Clase de Automaquillaje", featured: true },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const handleLinkClick = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || open ? "bg-cream/95 backdrop-blur-sm shadow-[0_1px_0_rgba(0,0,0,0.06)]" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#inicio" className="font-display text-2xl tracking-wide text-ink" onClick={handleLinkClick}>
          {siteConfig.brand.name}
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`inline-flex items-center gap-1.5 text-[13px] uppercase tracking-[0.12em] transition-colors hover:text-fuchsia ${
                  link.featured ? "font-semibold text-fuchsia" : "font-medium text-ink"
                }`}
              >
                {link.featured && <span aria-hidden="true">✦</span>}
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="hidden rounded-full bg-fuchsia px-6 py-2.5 text-[12px] uppercase tracking-[0.14em] font-semibold text-cream transition-colors hover:bg-fuchsia-deep md:inline-flex"
        >
          Reservar
        </a>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-ink transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-ink transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-400 ease-out ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 pb-8">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleLinkClick}
                className={`flex items-center gap-2 py-3 text-lg font-display border-b border-ink/10 ${
                  link.featured ? "text-fuchsia" : "text-ink"
                }`}
              >
                {link.featured && <span aria-hidden="true">✦</span>}
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-5">
            <a
              href="#contacto"
              onClick={handleLinkClick}
              className="inline-flex w-full items-center justify-center rounded-full bg-fuchsia px-6 py-3.5 text-[13px] uppercase tracking-[0.14em] font-semibold text-cream"
            >
              Reservar mi cita
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
