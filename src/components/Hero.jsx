import React, { useState } from 'react';
import { business } from '../config/business.js';
import Button from './ui/Button.jsx';
import { Phone, ArrowRight, ShieldCheck, MapPin, Clock } from 'lucide-react';

/**
 * Hero Section:
 * - min-height: 90vh
 * - Full-bleed background image with single tonal contrast scrim
 * - Strong hierarchy:
 *   - small eyebrow: City + Business Type
 *   - large confident H1 headline
 *   - one short supporting line
 *   - Primary CTA + Secondary CTA
 *   - quiet trust line below (hours & Whitefield location)
 */
export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'calc(var(--navbar-height) + var(--space-48))',
        paddingBottom: 'var(--space-64)',
        backgroundColor: '#0C0D0E',
        color: '#FFFFFF',
        overflow: 'hidden',
      }}
    >
      {/* Background Image Layer */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        {!imgError && business.images.hero ? (
          <img
            src={business.images.hero}
            alt="Warm fireplace hearth"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 40%',
              filter: 'brightness(0.65) contrast(1.08)',
            }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              background: 'radial-gradient(ellipse at center, #1F2228 0%, #0C0D0E 100%)',
            }}
          />
        )}

        {/* Measured Tonal Scrim for WCAG AA Contrast */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(12, 13, 14, 0.92) 0%, rgba(12, 13, 14, 0.8) 55%, rgba(12, 13, 14, 0.6) 100%)',
          }}
        />
        {/* Bottom subtle blend to canvas */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '100px',
            background: 'linear-gradient(to top, rgba(12, 13, 14, 0.95), transparent)',
          }}
        />
      </div>

      {/* Hero Foreground Content */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1200px',
        }}
      >
        <div style={{ maxWidth: '780px' }}>
          {/* Eyebrow: City & Business Type */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-display)',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-secondary)',
              marginBottom: 'var(--space-16)',
            }}
          >
            <span>{business.city}</span>
            <span style={{ opacity: 0.6 }}>·</span>
            <span>{business.niche}</span>
          </div>

          {/* Large confident H1 */}
          <h1
            style={{
              fontSize: 'var(--font-size-h1)',
              lineHeight: 1.12,
              letterSpacing: '-0.03em',
              color: '#FFFFFF',
              fontWeight: 800,
              marginBottom: 'var(--space-24)',
              textWrap: 'balance',
            }}
          >
            {business.headline}
          </h1>

          {/* Supporting line */}
          <p
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.85)',
              marginBottom: 'var(--space-32)',
              maxWidth: '62ch',
            }}
          >
            {business.subheadline}
          </p>

          {/* Action CTAs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '16px',
              marginBottom: 'var(--space-48)',
            }}
          >
            <Button
              href={business.contact.phoneLink}
              variant="accent"
              size="lg"
            >
              <Phone size={18} />
              <span>{business.cta.primary.label}: {business.contact.phoneDisplay}</span>
            </Button>

            {business.contact.whatsappLink && (
              <Button
                href={business.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
                style={{
                  color: '#FFFFFF',
                  borderColor: 'rgba(255, 255, 255, 0.25)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                }}
              >
                <span>{business.cta.whatsapp.label}</span>
              </Button>
            )}

            <Button
              href={business.cta.secondary.href}
              variant="ghost"
              size="lg"
              style={{
                color: '#FFFFFF',
              }}
            >
              <span>{business.cta.secondary.label}</span>
              <ArrowRight size={18} />
            </Button>
          </div>

          {/* Quiet Trust Line Below */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '24px',
              paddingTop: 'var(--space-24)',
              borderTop: '1px solid rgba(255, 255, 255, 0.12)',
              fontSize: '0.875rem',
              color: 'rgba(255, 255, 255, 0.7)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={17} style={{ color: 'var(--color-secondary)' }} />
              <span>Certificates issued for home insurance</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Clock size={16} style={{ color: 'var(--color-secondary)' }} />
              <span>{business.hoursSummary}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={16} style={{ color: 'var(--color-secondary)' }} />
              <span>Elms Square, Bury New Road (M45 7TA)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
