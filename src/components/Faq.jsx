import React, { useState } from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';
import { ChevronDown } from 'lucide-react';

/**
 * FAQ Section:
 * - 4 practical, owner-voiced questions addressing hearth care & bookings
 * - Clean accessible accordion interface with zero clutter
 */
export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="section" style={{ backgroundColor: 'var(--color-canvas)' }}>
      <div className="container">
        <SectionHeading
          eyebrow="Questions & Answers"
          title="Everything you need to know about your chimney visit."
          description="Straightforward answers about our cleaning procedures, insurance documentation, and preparation."
          align="center"
        />

        <div
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {business.faq.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border)',
                  overflow: 'hidden',
                  transition: 'border-color var(--transition-fast)',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    padding: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      color: 'var(--color-text)',
                      lineHeight: 1.4,
                    }}
                  >
                    {item.question}
                  </span>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: isOpen ? 'var(--color-secondary-light)' : 'var(--color-surface-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all var(--transition-fast)',
                    }}
                  >
                    <ChevronDown
                      size={18}
                      style={{
                        color: isOpen ? 'var(--color-accent)' : 'var(--color-text-muted)',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform var(--transition-fast)',
                      }}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 24px 24px 24px',
                      color: 'var(--color-text-muted)',
                      fontSize: '0.975rem',
                      lineHeight: 1.65,
                      borderTop: '1px solid var(--color-border-subtle)',
                      paddingTop: '16px',
                    }}
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
