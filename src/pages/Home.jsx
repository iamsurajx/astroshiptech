import HeroSection from "../sections/Hero";
import Services from "../sections/Services";
import WhyUs from "../sections/WhyUs";
import Work from "../sections/Work";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <>
      {/* id="hero" -> Logo click pe scroll */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* id="services" -> Navbar > Services */}
      <section id="services">
        <Services />
      </section>

      {/* id="whyus" -> Navbar > Why Us */}
      <section id="whyus">
        <WhyUs />
      </section>

      {/* id="work" -> Navbar > Our Work */}
      <section id="work">
        <Work />
      </section>

      {/* id="contact" -> Let's talk button */}
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
