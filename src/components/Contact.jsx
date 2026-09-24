import React, { useState } from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';
import Button from './ui/Button.jsx';
import { Phone, MapPin, Clock, Send, CheckCircle, Navigation, MessageCircle } from 'lucide-react';

/**
 * Contact Section:
 * - Conversion-focused
 * - Business hours, full address, direct phone link (+447480770281)
 * - Directions button
 * - Frontend-only contact/booking request form with clean validation & feedback
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    postcode: '',
    service: business.serviceOptions[0] || '',
    applianceType: 'Open Fireplace',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please provide your name and contact telephone number.');
      return;
    }
    // Simulate instantaneous clean frontend submission
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      postcode: '',
      service: business.serviceOptions[0] || '',
      applianceType: 'Open Fireplace',
      message: '',
    });
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <SectionHeading
          eyebrow="Direct Hearth & Flue Bookings"
          title="Book your chimney service or request a call."
          description="Speak directly with our local Whitefield team. Call us right away or submit your details below and we will contact you to arrange a convenient appointment."
          align="center"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-48)',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Business Contact Details */}
          <div
            style={{
              backgroundColor: 'var(--color-surface)',
              borderRadius: 'var(--radius-md)',
              padding: 'var(--space-40, 36px)',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-resting)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-32)',
            }}
          >
            <div>
              <span className="eyebrow" style={{ marginBottom: '8px' }}>Direct Telephone</span>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: 'var(--color-text)' }}>
                {business.contact.phoneDisplay}
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '16px' }}>
                For immediate enquiries, emergency blockages, or urgent sweeps across Whitefield and Manchester.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Button
                  href={business.contact.phoneLink}
                  variant="primary"
                  size="md"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <Phone size={17} />
                  <span>Call {business.contact.phoneDisplay}</span>
                </Button>

                {business.contact.whatsappLink && (
                  <Button
                    href={business.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="accent"
                    size="md"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <MessageCircle size={17} />
                    <span>WhatsApp {business.contact.whatsappDisplay}</span>
                  </Button>
                )}
              </div>
            </div>

            {/* Address & Directions */}
            <div style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: 'var(--space-24)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
                <MapPin size={20} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-text)' }}>Operating Base</h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', marginTop: '4px', lineHeight: 1.5 }}>
                    {business.address.line1}<br />
                    {business.address.line2}<br />
                    {business.address.town}, {business.address.city}<br />
                    {business.address.postcode}
                  </p>
                </div>
              </div>

              <div style={{ marginTop: '16px' }}>
                <Button
                  href={business.contact.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="sm"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <Navigation size={15} />
                  <span>Get Directions on Google Maps</span>
                </Button>
              </div>
            </div>

            {/* Operating Hours */}
            <div style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: 'var(--space-24)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <Clock size={20} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '3px' }} />
                <div style={{ width: '100%' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '8px' }}>
                    Operating Hours
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.88rem' }}>
                    {business.hours.map((h, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          color: 'var(--color-text-muted)',
                          paddingBottom: '4px',
                          borderBottom: idx < business.hours.length - 1 ? '1px dashed var(--color-border-subtle)' : 'none',
                        }}
                      >
                        <span style={{ fontWeight: 500 }}>{h.days}</span>
                        <span style={{ color: 'var(--color-text)' }}>{h.times}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Styled Interactive Booking Form */}
          <div
            style={{
              backgroundColor: 'var(--color-surface)',
              borderRadius: 'var(--radius-md)',
              padding: 'var(--space-40, 36px)',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-resting)',
            }}
          >
            {submitted ? (
              <div
                style={{
                  padding: 'var(--space-32) 0',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-secondary-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-accent)',
                  }}
                >
                  <CheckCircle size={32} />
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-text)' }}>
                  Enquiry Received
                </h3>
                <p style={{ color: 'var(--color-text-muted)', maxWidth: '44ch', fontSize: '0.95rem' }}>
                  Thank you, {formData.name}. We have logged your request for <strong>{formData.service}</strong> in the {formData.postcode || 'Manchester'} area and will call your telephone number ({formData.phone}) shortly.
                </p>
                <div style={{ marginTop: '16px' }}>
                  <Button onClick={resetForm} variant="secondary" size="md">
                    Submit Another Request
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '6px' }}>
                    Request an Appointment
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                    Fill in your details below and we will contact you to confirm pricing and schedule your sweep.
                  </p>
                </div>

                {errorMsg && (
                  <div
                    style={{
                      padding: '12px 16px',
                      backgroundColor: '#FEF2F2',
                      border: '1px solid #FCA5A5',
                      borderRadius: 'var(--radius-sm)',
                      color: '#991B1B',
                      fontSize: '0.875rem',
                    }}
                  >
                    {errorMsg}
                  </div>
                )}

                {/* Name & Phone */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '16px',
                  }}
                >
                  <div>
                    <label
                      htmlFor="contact-name"
                      style={{
                        display: 'block',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--color-text)',
                        marginBottom: '6px',
                      }}
                    >
                      Your Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. David Harrison"
                      value={formData.name}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-border)',
                        backgroundColor: '#FFFFFF',
                        color: 'var(--color-text)',
                        fontSize: '0.95rem',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      style={{
                        display: 'block',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--color-text)',
                        marginBottom: '6px',
                      }}
                    >
                      Telephone Number *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. 07480 770281"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-border)',
                        backgroundColor: '#FFFFFF',
                        color: 'var(--color-text)',
                        fontSize: '0.95rem',
                      }}
                    />
                  </div>
                </div>

                {/* Postcode & Appliance Type */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '16px',
                  }}
                >
                  <div>
                    <label
                      htmlFor="contact-postcode"
                      style={{
                        display: 'block',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--color-text)',
                        marginBottom: '6px',
                      }}
                    >
                      Property Postcode
                    </label>
                    <input
                      id="contact-postcode"
                      type="text"
                      name="postcode"
                      placeholder="e.g. M45 7TA"
                      value={formData.postcode}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-border)',
                        backgroundColor: '#FFFFFF',
                        color: 'var(--color-text)',
                        fontSize: '0.95rem',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-appliance"
                      style={{
                        display: 'block',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--color-text)',
                        marginBottom: '6px',
                      }}
                    >
                      Fireplace / Appliance
                    </label>
                    <select
                      id="contact-appliance"
                      name="applianceType"
                      value={formData.applianceType}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-border)',
                        backgroundColor: '#FFFFFF',
                        color: 'var(--color-text)',
                        fontSize: '0.95rem',
                      }}
                    >
                      <option value="Open Fireplace">Open Brick Fireplace</option>
                      <option value="Wood Burning Stove">Wood Burning Stove</option>
                      <option value="Multi-Fuel Stove">Multi-Fuel Stove</option>
                      <option value="Inglenook">Large Inglenook Fireplace</option>
                      <option value="Gas / Oil Flue">Gas / Oil Appliance Flue</option>
                      <option value="Unsure">Unsure / Need Advice</option>
                    </select>
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label
                    htmlFor="contact-service"
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--color-text)',
                      marginBottom: '6px',
                    }}
                  >
                    Primary Service Needed
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border)',
                      backgroundColor: '#FFFFFF',
                      color: 'var(--color-text)',
                      fontSize: '0.95rem',
                    }}
                  >
                    {business.serviceOptions.map((opt, idx) => (
                      <option key={idx} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Additional Notes */}
                <div>
                  <label
                    htmlFor="contact-notes"
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--color-text)',
                      marginBottom: '6px',
                    }}
                  >
                    Additional Notes or Access Information
                  </label>
                  <textarea
                    id="contact-notes"
                    name="message"
                    rows={3}
                    placeholder="e.g. When was the chimney last swept, or any known smoke backdraft issues..."
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border)',
                      backgroundColor: '#FFFFFF',
                      color: 'var(--color-text)',
                      fontSize: '0.95rem',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <Send size={16} />
                  <span>Submit Booking Request</span>
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr 1.25fr !important;
            gap: var(--space-64) !important;
          }
        }
      `}</style>
    </section>
  );
}
