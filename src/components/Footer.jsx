import React from 'react';
import { business } from '../config/business.js';
import { Phone, MapPin, Clock, ArrowUp } from 'lucide-react';

/**
 * Footer Component:
 * - Quiet, minimal, and calm
 * - Wordmark + location + phone + operating hours
 * - Working links and smooth scroll to top
 */
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#0C0D0E',
        color: '#FFFFFF',
        paddingTop: 'var(--space-64)',
        paddingBottom: 'var(--space-32)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <div className="container">
        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'var(--space-48)',
            marginBottom: 'var(--space-48)',
          }}
        >
          {/* Column 1: Brand & Identity */}
          <div>
            <a
              href="#"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.35rem',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: '#FFFFFF',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: 'var(--space-16)',
                textDecoration: 'none',
              }}
            >
              <span>{business.name}</span>
              <span
                style={{
                  display: 'inline-block',
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-secondary)',
                }}
              />
            </a>
            <p
              style={{
                fontSize: '0.92rem',
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: 1.6,
                maxWidth: '38ch',
              }}
            >
              {business.footer.note}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4
              style={{
                fontSize: '0.85rem',
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-secondary)',
                marginBottom: 'var(--space-16)',
                fontWeight: 700,
              }}
            >
              Navigation
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              {business.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    style={{
                      fontSize: '0.92rem',
                      color: 'rgba(255, 255, 255, 0.75)',
                      textDecoration: 'none',
                      transition: 'color var(--transition-fast)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#FFFFFF';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)';
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Base */}
          <div>
            <h4
              style={{
                fontSize: '0.85rem',
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-secondary)',
                marginBottom: 'var(--space-16)',
                fontWeight: 700,
              }}
            >
              Local Office
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'rgba(255, 255, 255, 0.75)' }}>
                <MapPin size={16} style={{ color: 'var(--color-secondary)', flexShrink: 0, marginTop: '3px' }} />
                <span>
                  {business.address.line1}, {business.address.line2}, {business.address.town}, {business.address.city}, {business.address.postcode}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={16} style={{ color: 'var(--color-secondary)', flexShrink: 0 }} />
                <a
                  href={business.contact.phoneLink}
                  style={{
                    color: '#FFFFFF',
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}
                >
                  {business.contact.phoneDisplay}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'rgba(255, 255, 255, 0.65)' }}>
                <Clock size={16} style={{ color: 'var(--color-secondary)', flexShrink: 0, marginTop: '3px' }} />
                <span>{business.hoursSummary}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: 'var(--space-24)',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '0.85rem',
            color: 'rgba(255, 255, 255, 0.5)',
          }}
        >
          <div>{business.footer.copyright}</div>
          
          <button
            type="button"
            onClick={scrollToTop}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'transparent',
              border: 'none',
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'color var(--transition-fast)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
