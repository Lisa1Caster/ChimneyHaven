import React from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';

/**
 * Testimonials Section:
 * Rendered ONLY if real testimonials exist in business.testimonials.
 * If none provided, returns null cleanly with zero filler or DOM footprint.
 */
export default function Testimonials() {
  if (!business.testimonials || business.testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="section section-alt">
      <div className="container">
        <SectionHeading
          eyebrow="Local Feedback"
          title="What homeowners say about our chimney service."
          align="center"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-32)',
          }}
        >
          {business.testimonials.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--color-surface)',
                padding: 'var(--space-32)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-resting)',
              }}
            >
              <p
                style={{
                  fontSize: '1rem',
                  color: 'var(--color-text)',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  marginBottom: 'var(--space-16)',
                }}
              >
                "{item.quote}"
              </p>
              <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                {item.author}
                {item.location && <span style={{ color: 'var(--color-text-muted)', fontWeight: 400 }}> · {item.location}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
