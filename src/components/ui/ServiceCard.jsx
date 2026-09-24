import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

/**
 * ServiceCard:
 * - 16px radius
 * - Large image filling the top with object-fit: cover and tonal hover zoom
 * - Zero-broken-image fallback container with graceful styling
 * - Clean editorial number & category
 * - Crisp title, description, and feature list
 */
export default function ServiceCard({
  number,
  title,
  description,
  category,
  image,
  features = [],
  ctaHref = '#contact',
}) {
  const [imgError, setImgError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      style={{
        backgroundColor: 'var(--color-surface)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        border: '1px solid var(--color-border)',
        boxShadow: isHovered ? 'var(--shadow-hover)' : 'var(--shadow-resting)',
        transition: 'all var(--transition-normal)',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Image Container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16/10',
          overflow: 'hidden',
          backgroundColor: '#202227',
        }}
      >
        {!imgError && image ? (
          <img
            src={image}
            alt={title}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 400ms cubic-bezier(0.16, 1, 0.3, 1)',
              transform: isHovered ? 'scale(1.04)' : 'scale(1)',
              display: 'block',
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
              fontSize: '0.9rem',
              fontWeight: 600,
              padding: '16px',
              textAlign: 'center',
            }}
          >
            <span>{title}</span>
          </div>
        )}

        {/* Subtle tonal gradient scrim */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(12, 13, 14, 0.6) 0%, rgba(12, 13, 14, 0) 50%)',
            pointerEvents: 'none',
          }}
        />

        {/* Category & Number badge */}
        <div
          style={{
            position: 'absolute',
            bottom: '16px',
            left: '20px',
            right: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: '#FFFFFF',
            fontSize: '0.8rem',
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          <span style={{ color: 'var(--color-secondary)' }}>{category || 'Chimney Service'}</span>
          <span style={{ opacity: 0.9 }}>{number}</span>
        </div>
      </div>

      {/* Card Body */}
      <div
        style={{
          padding: 'var(--space-32)',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        }}
      >
        <h3
          style={{
            fontSize: '1.25rem',
            marginBottom: 'var(--space-8)',
            color: 'var(--color-text)',
            fontWeight: 700,
            lineHeight: 1.3,
          }}
        >
          {title}
        </h3>

        <p
          style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-text-muted)',
            lineHeight: 1.6,
            marginBottom: 'var(--space-24)',
          }}
        >
          {description}
        </p>

        {/* Feature List */}
        {features && features.length > 0 && (
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 var(--space-24) 0',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            {features.map((item, idx) => (
              <li
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                  fontSize: '0.875rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.45,
                }}
              >
                <CheckCircle2
                  size={16}
                  style={{
                    color: 'var(--color-accent)',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Bottom CTA Action Link */}
        <div style={{ marginTop: 'auto', paddingTop: 'var(--space-16)', borderTop: '1px solid var(--color-border-subtle)' }}>
          <a
            href={ctaHref}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              fontSize: '0.9rem',
              fontWeight: 600,
              fontFamily: 'var(--font-display)',
              color: 'var(--color-primary)',
              textDecoration: 'none',
              transition: 'color var(--transition-fast)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--color-accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--color-primary)';
            }}
          >
            <span>Book this service</span>
            <ArrowUpRight
              size={18}
              style={{
                transform: isHovered ? 'translate(2px, -2px)' : 'translate(0, 0)',
                transition: 'transform var(--transition-fast)',
              }}
            />
          </a>
        </div>
      </div>
    </article>
  );
}
