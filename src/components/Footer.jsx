import { buildWhatsappUrl, siteConfig } from "../data/siteConfig";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-3xl">{siteConfig.brand.name}</p>
            <p className="mt-3 max-w-xs text-sm text-cream/60">
              Maquillaje profesional en {siteConfig.brand.location}. Un estudio propio, una
              experiencia pensada para ti.
            </p>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-cream/50">Navegación</p>
            <ul className="mt-4 space-y-2.5 text-sm text-cream/75">
              <li><a href="#servicios" className="hover:text-pink">Servicios</a></li>
              <li><a href="#portafolio" className="hover:text-pink">Portafolio</a></li>
              <li><a href="#automaquillaje" className="hover:text-pink">Automaquillaje 1:1</a></li>
              <li><a href="#sobre-mi" className="hover:text-pink">Sobre mí</a></li>
              <li><a href="#ubicacion" className="hover:text-pink">Ubicación</a></li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-cream/50">Contacto</p>
            <ul className="mt-4 space-y-2.5 text-sm text-cream/75">
              <li>
                <a
                  href={buildWhatsappUrl(siteConfig.whatsappMessages.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`https://instagram.com/${siteConfig.instagramHandle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink"
                >
                  @{siteConfig.instagramHandle}
                </a>
              </li>
              <li className="text-cream/60">{siteConfig.brand.location} · {siteConfig.brand.locationDetail}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/40 md:flex-row md:items-center">
          <p>© {year} {siteConfig.brand.name}. Todos los derechos reservados.</p>
          <p>Diseño y experiencia digital · Beauty Studio</p>
        </div>
      </div>
    </footer>
  );
}
