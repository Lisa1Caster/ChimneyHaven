import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import Testimonials from './components/Testimonials.jsx';
import Faq from './components/Faq.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

/**
 * ChimneyHaven - High-End Home Services & Chimney Care Website
 * Built for Whitefield & Greater Manchester
 */
export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-canvas)] text-[var(--color-text)] flex flex-col selection:bg-[var(--color-secondary)] selection:text-[var(--color-primary)]">
      {/* 1. Header & Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" style={{ flexGrow: 1 }}>
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Services Section */}
        <Services />

        {/* 4. About Section */}
        <About />

        {/* 5. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 6. Testimonials Section (rendered only if real reviews exist) */}
        <Testimonials />

        {/* 7. FAQ Section */}
        <Faq />

        {/* 8. Contact & Booking Section */}
        <Contact />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
