import Hero from "../components/hero/Hero";
import Programs from "../components/programs/Programs";
import Pricing from "../components/pricing/Pricing";
import Contact from "../components/contact/Contact";
import About from "../components/about/About";

export default function Home() {
  return (
    <>
      <Hero />
      <Programs />
      <Pricing />
      <About/>
      <Contact />

    </>
  );
}
