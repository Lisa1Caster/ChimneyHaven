import React, { useState } from 'react';
import { business } from '../config/business.js';
import Button from './ui/Button.jsx';
import { MapPin, Phone, CheckCircle2 } from 'lucide-react';

/**
 * About Section:
 * - Refined two-column layout (imagery + editorial statement)
 * - Highlights local presence in Whitefield & Manchester
 * - Clean typography and restrained depth
 */
export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--color-canvas)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-64)',
            alignItems: 'center',
          }}
          className="about-grid"
        >
          {/* Left Column: Visual Asset & Local Marker */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                aspectRatio: '4/3',
                backgroundColor: '#1E2024',
                boxShadow: 'var(--shadow-resting)',
                border: '1px solid var(--color-border)',
                position: 'relative',
              }}
            >
              {!imgError && business.images.about ? (
                <img
                  src={business.images.about}
                  alt="ChimneyHaven hearth care"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              ) : (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'var(--color-surface-subtle)',
                    color: 'var(--color-text-muted)',
                    padding: '24px',
                  }}
                >
                  <span>{business.name} hearth & chimney workshop</span>
                </div>
              )}

              {/* Architectural badge overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  right: '20px',
                  backgroundColor: 'rgba(12, 13, 14, 0.88)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  color: '#FFFFFF',
                  padding: '16px 20px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <MapPin size={20} style={{ color: 'var(--color-secondary)', flexShrink: 0 }} />
                <div style={{ fontSize: '0.85rem' }}>
                  <div style={{ fontWeight: 600, color: '#FFFFFF' }}>Leonard Curtis House, Elms Square</div>
                  <div style={{ color: 'var(--color-secondary)', fontSize: '0.78rem' }}>Bury New Road, Whitefield (M45 7TA)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div>
            <span className="eyebrow">{business.about.eyebrow}</span>
            <h2
              style={{
                fontSize: 'var(--font-size-h2)',
                marginBottom: 'var(--space-24)',
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              {business.about.title}
            </h2>

            {business.about.paragraphs.map((p, idx) => (
              <p
                key={idx}
                style={{
                  fontSize: 'var(--font-size-body)',
                  lineHeight: 1.68,
                  marginBottom: 'var(--space-24)',
                  color: 'var(--color-text-muted)',
                }}
              >
                {p}
              </p>
            ))}

            {/* Highlights list */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                margin: 'var(--space-32) 0',
                padding: 'var(--space-24)',
                backgroundColor: 'var(--color-surface)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border)',
              }}
            >
              {business.about.highlights.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    fontSize: '0.92rem',
                  }}
                >
                  <CheckCircle2
                    size={18}
                    style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }}
                  />
                  <div>
                    <strong style={{ color: 'var(--color-text)', marginRight: '6px' }}>{item.label}:</strong>
                    <span style={{ color: 'var(--color-text-muted)' }}>{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <Button href={business.contact.phoneLink} variant="primary" size="md">
                <Phone size={16} />
                <span>{business.cta.primary.label}</span>
              </Button>
              <Button href={business.cta.directions.href} target="_blank" rel="noopener noreferrer" variant="secondary" size="md">
                <span>{business.cta.directions.label}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: var(--space-96) !important;
          }
        }
      `}</style>
    </section>
  );
}
