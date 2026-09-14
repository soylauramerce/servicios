import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WhatsAppFloating from "./components/WhatsAppFloating";
import About from "./sections/About";
import BookingProcess from "./sections/BookingProcess";
import Brides from "./sections/Brides";
import FinalCta from "./sections/FinalCta";
import Hero from "./sections/Hero";
import Location from "./sections/Location";
import Portfolio from "./sections/Portfolio";
import SelfMakeup from "./sections/SelfMakeup";
import Services from "./sections/Services";
import Storytelling from "./sections/Storytelling";
import StudioExperience from "./sections/StudioExperience";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Storytelling />
        <Services />
        <StudioExperience />
        <Portfolio />
        <Brides />
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
