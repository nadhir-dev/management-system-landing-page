import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { Features } from "@/components/Features";
import Footer from "@/components/Footer";
import { Metrics } from "@/components/Metrics";
import { Testimonials } from "@/components/Testimonials";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Metrics />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
