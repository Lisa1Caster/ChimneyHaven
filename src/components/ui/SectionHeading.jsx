import React from 'react';

/**
 * Standard Section Heading adhering to:
 * - Eyebrow small-caps text (0.8rem, letter-spacing 0.14em, uppercase in accent color)
 * - Large confident H2 (clamp(2rem, 3.5vw, 2.8rem))
 * - Limit body line length (~65ch)
 * - Centered or left-aligned
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center', // 'left' | 'center'
  theme = 'light', // 'light' | 'dark'
  className = '',
}) {
  const isCenter = align === 'center';

  return (
    <div
      style={{
        textAlign: isCenter ? 'center' : 'left',
        maxWidth: isCenter ? '760px' : '680px',
        marginLeft: isCenter ? 'auto' : '0',
        marginRight: isCenter ? 'auto' : '0',
        marginBottom: 'var(--space-64)',
      }}
      className={className}
    >
      {eyebrow && (
        <span
          className="eyebrow"
          style={{
            color: theme === 'dark' ? 'var(--color-secondary)' : 'var(--color-accent)',
          }}
        >
          {eyebrow}
        </span>
      )}
      
      {title && (
        <h2
          style={{
            fontSize: 'var(--font-size-h2)',
            color: theme === 'dark' ? 'var(--color-text-inverse)' : 'var(--color-text)',
            marginBottom: description ? 'var(--space-16)' : '0',
            fontWeight: 700,
            lineHeight: 1.18,
            letterSpacing: '-0.025em',
          }}
        >
          {title}
        </h2>
      )}

      {description && (
        <p
          style={{
            fontSize: 'var(--font-size-body)',
            color: theme === 'dark' ? 'var(--color-text-inverse-muted)' : 'var(--color-text-muted)',
            lineHeight: 1.65,
            marginLeft: isCenter ? 'auto' : '0',
            marginRight: isCenter ? 'auto' : '0',
            maxWidth: '65ch',
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
