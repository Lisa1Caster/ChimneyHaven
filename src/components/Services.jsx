import React, { useState, useMemo } from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';
import ServiceCard from './ui/ServiceCard.jsx';

/**
 * Services Section:
 * - 3 across on desktop, 1 on mobile
 * - Large image cards with tonal hover zoom
 * - Clear editorial numbering
 * - Category filter tabs for easy exploration of all 12 services
 */
export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Derive unique categories from business.services
  const categories = useMemo(() => {
    const cats = ['All'];
    business.services.forEach((s) => {
      if (s.category && !cats.includes(s.category)) {
        cats.push(s.category);
      }
    });
    return cats;
  }, []);

  const filteredServices = useMemo(() => {
    if (selectedCategory === 'All') return business.services;
    return business.services.filter((s) => s.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <SectionHeading
          eyebrow="Specialist Flue & Hearth Services"
          title="Engineered chimney care, sweeping, and masonry repairs."
          description="From routine soot sweeps and camera diagnostics to full stainless flue liner installations, crown repairs, and waterproof flashing across Whitefield and Manchester."
          align="center"
        />

        {/* Category Filter Tabs (Single-line controls with clean segmented styling) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: 'var(--space-48)',
          }}
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            const count = cat === 'All' ? business.services.length : business.services.filter(s => s.category === cat).length;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-sm)',
                  border: isActive ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
                  backgroundColor: isActive ? 'var(--color-primary)' : 'var(--color-surface)',
                  color: isActive ? '#FFFFFF' : 'var(--color-text)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                  whiteSpace: 'nowrap',
                }}
              >
                <span>{cat}</span>
                <span
                  style={{
                    marginLeft: '6px',
                    opacity: isActive ? 0.8 : 0.5,
                    fontSize: '0.78rem',
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* 3-Column Elevated Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-32)',
            alignItems: 'stretch',
          }}
          className="services-grid"
        >
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              number={service.number}
              title={service.title}
              description={service.description}
              category={service.category}
              image={service.image}
              features={service.features}
              ctaHref="#contact"
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
