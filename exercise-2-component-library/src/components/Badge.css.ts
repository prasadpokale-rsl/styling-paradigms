import { style, styleVariants } from '@vanilla-extract/css'
import { vars } from '../styles/tokens.css'

export const base = style({
  display: 'inline-flex',
  alignItems: 'center',
  minHeight: '24px',
  padding: `0 ${vars.space.two}`,
  borderRadius: vars.radius.pill,
  fontSize: '12px',
  fontWeight: 600,
  lineHeight: 1,
})

export const variants = styleVariants({
  success: {
    backgroundColor: vars.color.successSoft,
    color: vars.color.success,
  },
  warning: {
    backgroundColor: vars.color.warningSoft,
    color: vars.color.warning,
  },
  error: {
    backgroundColor: vars.color.dangerSoft,
    color: vars.color.danger,
  },
})
