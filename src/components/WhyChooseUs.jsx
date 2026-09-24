import React from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';

/**
 * Why Choose Us Section:
 * - 4 concise trust points drawn strictly from real USPs, location, and standards
 * - Clean editorial numbers (01, 02, 03, 04)
 * - Restrained, modern layout
 */
export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section section-dark">
      <div className="container">
        <SectionHeading
          eyebrow="Safety & Standards"
          title="Why homeowners in Whitefield rely on ChimneyHaven."
          description="We combine meticulous British solid-fuel standards with modern HEPA dust containment and digital diagnostics."
          align="center"
          theme="dark"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 'var(--space-32)',
          }}
          className="why-grid"
        >
          {business.whyChooseUs.map((item) => (
            <div
              key={item.index}
              style={{
                backgroundColor: 'var(--color-surface-dark-subtle)',
                padding: 'var(--space-32)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-16)',
                transition: 'border-color var(--transition-fast), transform var(--transition-fast)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-secondary)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Editorial Index Number */}
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--color-secondary)',
                  letterSpacing: '0.05em',
                }}
              >
                {item.index}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  lineHeight: 1.3,
                }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--color-text-inverse-muted)',
                  lineHeight: 1.6,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .why-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
