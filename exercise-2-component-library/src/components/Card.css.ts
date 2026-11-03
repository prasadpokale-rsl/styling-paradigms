import { style } from '@vanilla-extract/css'
import { vars } from '../styles/tokens.css'

export const card = style({
  minWidth: 0,
  padding: vars.space.six,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.medium,
  backgroundColor: vars.color.surface,
  boxShadow: vars.shadow.card,
  '@media': {
    'screen and (max-width: 600px)': {
      padding: vars.space.four,
    },
  },
})
