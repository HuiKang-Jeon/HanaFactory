import { LangProvider } from "./context/LangContext";
import Navbar from "./components/Navbar";
import FloatButtons from "./components/FloatButtons";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Types from "./components/Types";
import Pricing from "./components/Pricing";
import Calculator from "./components/Calculator";
import Portfolio from "./components/Portfolio";
import Trust from "./components/Trust";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <LangProvider>
      <Navbar />
      <FloatButtons />
      <main>
        <Hero />
        <Process />
        <Types />
        <Pricing />
        <Calculator />
        <Portfolio />
        <Trust />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  );
}
