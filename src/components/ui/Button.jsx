import React from 'react';

/**
 * Reusable Button component adhering to Design System tokens:
 * - 8px radius
 * - Single-line controls (whitespace-nowrap)
 * - Minimum touch target >= 44px
 * - Subtle hover transitions (150-250ms)
 */
export default function Button({
  children,
  href,
  onClick,
  variant = 'primary', // 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost'
  size = 'md', // 'sm' | 'md' | 'lg'
  className = '',
  target,
  rel,
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    textDecoration: 'none',
    borderRadius: 'var(--radius-sm)',
    whiteSpace: 'nowrap',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    transition: 'all var(--transition-fast)',
    border: '1px solid transparent',
    boxShadow: 'none',
  };

  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: '0.875rem',
      minHeight: '38px',
    },
    md: {
      padding: '12px 24px',
      fontSize: '0.95rem',
      minHeight: '44px',
    },
    lg: {
      padding: '16px 32px',
      fontSize: '1.05rem',
      minHeight: '52px',
    },
  };

  const variants = {
    primary: {
      backgroundColor: 'var(--color-primary)',
      color: '#FFFFFF',
      borderColor: 'var(--color-primary)',
    },
    secondary: {
      backgroundColor: 'var(--color-surface)',
      color: 'var(--color-primary)',
      borderColor: 'var(--color-border)',
    },
    accent: {
      backgroundColor: 'var(--color-secondary)',
      color: 'var(--color-primary)',
      borderColor: 'var(--color-secondary)',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'inherit',
      borderColor: 'currentColor',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'inherit',
      borderColor: 'transparent',
    },
  };

  const combinedStyles = {
    ...baseStyles,
    ...sizes[size],
    ...variants[variant],
  };

  const handleMouseEnter = (e) => {
    if (disabled) return;
    if (variant === 'primary') {
      e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)';
      e.currentTarget.style.transform = 'translateY(-1px)';
    } else if (variant === 'secondary') {
      e.currentTarget.style.backgroundColor = 'var(--color-surface-subtle)';
      e.currentTarget.style.borderColor = 'rgba(18, 19, 22, 0.2)';
      e.currentTarget.style.transform = 'translateY(-1px)';
    } else if (variant === 'accent') {
      e.currentTarget.style.backgroundColor = '#C7B594';
      e.currentTarget.style.transform = 'translateY(-1px)';
    } else if (variant === 'outline') {
      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
      e.currentTarget.style.transform = 'translateY(-1px)';
    }
  };

  const handleMouseLeave = (e) => {
    if (disabled) return;
    e.currentTarget.style.transform = 'translateY(0)';
    if (variant === 'primary') {
      e.currentTarget.style.backgroundColor = 'var(--color-primary)';
    } else if (variant === 'secondary') {
      e.currentTarget.style.backgroundColor = 'var(--color-surface)';
      e.currentTarget.style.borderColor = 'var(--color-border)';
    } else if (variant === 'accent') {
      e.currentTarget.style.backgroundColor = 'var(--color-secondary)';
    } else if (variant === 'outline') {
      e.currentTarget.style.backgroundColor = 'transparent';
    }
  };

  if (href) {
    return (
      <a
        href={href}
        style={combinedStyles}
        className={className}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={combinedStyles}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </button>
  );
}
