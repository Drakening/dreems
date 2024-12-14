import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Designs from './components/Designs';
import Cta from './components/Cta';
import Services from './components/Services';
import About from './components/About';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Questions from './components/Questions';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="designs">
          <Designs />
        </section>
        <Cta />
        <section id="services">
          <Services />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="faq">
          <Questions />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}

