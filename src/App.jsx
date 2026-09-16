import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WhatsAppFloating from "./components/WhatsAppFloating";
import About from "./sections/About";
import BookingProcess from "./sections/BookingProcess";
import FinalCta from "./sections/FinalCta";
import Hero from "./sections/Hero";
import Location from "./sections/Location";
import SelfMakeup from "./sections/SelfMakeup";
import Services from "./sections/Services";
import Storytelling from "./sections/Storytelling";
import StudioExperience from "./sections/StudioExperience";

// Portafolio (Portfolio.jsx) y Novias (Brides.jsx) quedan fuera del sitio por
// ahora: todavía no hay suficientes fotos reales para mostrarlos completos.
// Los componentes se conservan listos para volver a agregarlos aquí en
// cuanto haya fotos de portafolio y de novias.

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Storytelling />
        <Services />
        <StudioExperience />
        <SelfMakeup />
        <About />
        <BookingProcess />
        <Location />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloating />
    </>
  );
}
