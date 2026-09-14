import { buildWhatsappUrl, siteConfig } from "../data/siteConfig";

/** Botón flotante de WhatsApp, visible en todas las vistas. */
export default function WhatsAppFloating() {
  return (
    <a
      href={buildWhatsappUrl(siteConfig.whatsappMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-fuchsia text-cream shadow-lg shadow-fuchsia/30 transition-transform duration-300 hover:scale-105 hover:bg-fuchsia-deep"
    >
      <svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor" aria-hidden="true">
        <path d="M16.03 3C9.4 3 4 8.37 4 15c0 2.36.68 4.56 1.86 6.44L4 29l7.77-1.83A11.93 11.93 0 0 0 16.03 27C22.66 27 28 21.63 28 15S22.66 3 16.03 3Zm6.86 16.86c-.29.82-1.7 1.57-2.35 1.67-.6.1-1.36.14-2.2-.14-.5-.16-1.15-.38-1.98-.74-3.49-1.51-5.76-5.05-5.94-5.29-.17-.24-1.42-1.89-1.42-3.6 0-1.71.9-2.55 1.22-2.9.32-.34.7-.43.93-.43.23 0 .47 0 .67.01.21.01.5-.08.78.6.29.7.99 2.42 1.08 2.6.09.17.15.37.03.6-.12.23-.18.37-.36.57-.18.2-.38.45-.54.6-.18.17-.36.35-.16.7.21.36.94 1.55 2.02 2.51 1.4 1.24 2.58 1.63 2.95 1.81.28.14.45.12.61-.05.2-.22.85-.99 1.08-1.33.23-.34.46-.28.77-.17.32.11 2.02.95 2.37 1.13.34.17.57.26.65.4.09.15.09.85-.2 1.66Z" />
      </svg>
    </a>
  );
}
