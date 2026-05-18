import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import ExchangePartners from "@/components/ExchangePartners";
import CoreServices from "@/components/CoreServices";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <ExchangePartners />
        <CoreServices />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
