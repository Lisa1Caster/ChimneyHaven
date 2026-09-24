import React, { useState, useEffect } from 'react';
import { business } from '../config/business.js';
import Button from './ui/Button.jsx';
import { Menu, X, Phone } from 'lucide-react';

/**
 * Navbar Component:
 * - Follows Top Bar Contract: Zone 1 (Wordmark), Zone 2 (Clean text links), Zone 3 (Primary CTA)
 * - Readable immediately on page load before scrolling
 * - Responsive with mobile drawer
 * - Smooth scroll anchor links
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: 'var(--navbar-height)',
        backgroundColor: isScrolled
          ? 'rgba(12, 13, 14, 0.94)'
          : 'rgba(12, 13, 14, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        transition: 'background-color 200ms ease, border-color 200ms ease',
      }}
    >
      <div
        className="container"
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.35rem',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: '#FFFFFF',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
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

        {/* Zone 2: Clean text navigation links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '32px',
          }}
          className="desktop-nav"
        >
          {business.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                fontWeight: 500,
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                transition: 'color var(--transition-fast)',
                position: 'relative',
                padding: '4px 0',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action (Call Now) & Mobile Toggle */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div className="desktop-cta" style={{ display: 'none' }}>
            <Button
              href={business.contact.phoneLink}
              variant="accent"
              size="sm"
            >
              <Phone size={15} />
              <span>{business.cta.primary.label}</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#FFFFFF',
              cursor: 'pointer',
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Panel */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'var(--navbar-height)',
            left: 0,
            right: 0,
            backgroundColor: '#0C0D0E',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '24px 20px',
            boxShadow: 'var(--shadow-dark)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            maxHeight: 'calc(85vh - var(--navbar-height))',
            overflowY: 'auto',
          }}
        >
          {business.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                fontWeight: 600,
                color: 'rgba(255, 255, 255, 0.9)',
                textDecoration: 'none',
                padding: '8px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              {item.label}
            </a>
          ))}

          <div style={{ paddingTop: '8px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Button
              href={business.contact.phoneLink}
              variant="accent"
              size="md"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Phone size={16} />
              <span>{business.cta.primary.label}: {business.contact.phoneDisplay}</span>
            </Button>

            {business.contact.whatsappLink && (
              <Button
                href={business.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="md"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  borderColor: 'rgba(255, 255, 255, 0.25)',
                  color: '#FFFFFF',
                }}
              >
                <span>{business.cta.whatsapp.label} ({business.contact.whatsappDisplay})</span>
              </Button>
            )}
            
            <Button
              href={business.cta.secondary.href}
              variant="secondary"
              size="md"
              onClick={handleLinkClick}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>{business.cta.secondary.label}</span>
            </Button>
          </div>
        </div>
      )}

      {/* Responsive media query styling helper */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-cta {
            display: block !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
