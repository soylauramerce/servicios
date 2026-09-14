import Button from "../components/Button";
import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";
import { buildWhatsappUrl, siteConfig } from "../data/siteConfig";
import { bookingProcess } from "../data/content";

export default function BookingProcess() {
  return (
    <section className="bg-cream-deep py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 text-center md:px-10">
        <Reveal>
          <SectionLabel>{bookingProcess.label}</SectionLabel>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-6 font-display text-4xl text-ink md:text-5xl">{bookingProcess.title}</h2>
        </Reveal>

        <div className="mt-16 grid gap-10 text-left sm:grid-cols-2 lg:grid-cols-4">
          {bookingProcess.steps.map((step, i) => (
            <Reveal key={step.number} delay={Math.min(i + 1, 3)} className="relative">
              <span className="font-display text-5xl text-pink">{step.number}</span>
              <h3 className="mt-4 font-display text-xl text-ink">{step.title}</h3>
              <p className="mt-2 text-[15px] text-ink-soft">{step.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={3}>
          <Button
            as="a"
            href={buildWhatsappUrl(siteConfig.whatsappMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="mt-14"
          >
            Reservar mi cita
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
