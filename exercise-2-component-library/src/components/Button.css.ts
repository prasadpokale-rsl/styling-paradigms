import { style, styleVariants } from '@vanilla-extract/css'
import { vars } from '../styles/tokens.css'

export const base = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid transparent',
  borderRadius: vars.radius.small,
  fontWeight: 600,
  lineHeight: 1.2,
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  transition: 'background-color 140ms ease, border-color 140ms ease, color 140ms ease',
  selectors: {
    '&:focus-visible': {
      outline: `3px solid ${vars.color.focus}`,
      outlineOffset: '2px',
    },
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.48,
    },
  },
})

export const variants = styleVariants({
  primary: {
    backgroundColor: vars.color.primary,
    color: vars.color.white,
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: vars.color.primaryHover,
      },
    },
  },
  secondary: {
    backgroundColor: vars.color.surface,
    borderColor: vars.color.border,
    color: vars.color.text,
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: vars.color.canvas,
        borderColor: vars.color.muted,
      },
    },
  },
  danger: {
    backgroundColor: vars.color.danger,
    color: vars.color.white,
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: vars.color.dangerHover,
      },
    },
  },
})

export const sizes = styleVariants({
  small: {
    minHeight: '32px',
    padding: `0 ${vars.space.three}`,
    fontSize: '13px',
  },
  large: {
    minHeight: '42px',
    padding: `0 ${vars.space.four}`,
    fontSize: '14px',
  },
})
