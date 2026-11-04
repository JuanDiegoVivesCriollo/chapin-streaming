import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Descargas from "@/components/Descargas";
import Servicios from "@/components/Servicios";
import DispositivosCompatibles from "@/components/DispositivosCompatibles";
import PorQueElegir from "@/components/PorQueElegir";
import PreciosRegionales from "@/components/PreciosRegionales";
import Precios from "@/components/Precios";
import MetodosPago from "@/components/MetodosPago";
import Galeria from "@/components/Galeria";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Servicios />
      <DispositivosCompatibles />
      <Descargas />
      <PorQueElegir />
      <PreciosRegionales />
      <Precios />
      <MetodosPago />
      <Galeria />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
