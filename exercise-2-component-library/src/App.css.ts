import { style } from '@vanilla-extract/css'
import { vars } from './styles/tokens.css'

export const page = style({
  minHeight: '100vh',
  backgroundColor: vars.color.canvas,
  color: vars.color.text,
  fontFamily: vars.font.body,
})

export const header = style({
  borderBottom: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.surface,
})

export const headerInner = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 'min(100% - 40px, 840px)',
  minHeight: '56px',
  margin: '0 auto',
})

export const brand = style({
  color: vars.color.text,
  fontSize: '15px',
  fontWeight: 650,
  selectors: {
    '&:focus-visible': {
      outline: `3px solid ${vars.color.focus}`,
      outlineOffset: '3px',
    },
  },
})

export const headerLabel = style({
  color: vars.color.muted,
  fontSize: '13px',
})

export const main = style({
  width: 'min(100% - 40px, 840px)',
  margin: '0 auto',
  padding: `${vars.space.eight} 0`,
  '@media': {
    'screen and (max-width: 480px)': {
      width: 'min(100% - 32px, 840px)',
    },
  },
})

export const pageIntro = style({
  marginBottom: vars.space.eight,
})

export const title = style({
  margin: 0,
  fontSize: '28px',
  fontWeight: 650,
  letterSpacing: '-0.03em',
  lineHeight: 1.25,
})

export const description = style({
  margin: `${vars.space.two} 0 0`,
  color: vars.color.muted,
  fontSize: '14px',
  lineHeight: 1.6,
})

export const section = style({
  marginTop: vars.space.eight,
})

export const sectionHeading = style({
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  gap: vars.space.three,
  marginBottom: vars.space.three,
  '@media': {
    'screen and (max-width: 520px)': {
      alignItems: 'flex-start',
      flexDirection: 'column',
      gap: vars.space.one,
    },
  },
})

export const sectionTitle = style({
  margin: 0,
  fontSize: '18px',
  fontWeight: 600,
})

export const sectionDescription = style({
  margin: 0,
  color: vars.color.muted,
  fontSize: '13px',
})

export const showcase = style({
  paddingTop: vars.space.two,
  paddingBottom: vars.space.two,
})

export const buttonRow = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vars.space.four,
  minHeight: '60px',
  borderBottom: `1px solid ${vars.color.border}`,
  selectors: {
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  '@media': {
    'screen and (max-width: 420px)': {
      alignItems: 'flex-start',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: vars.space.two,
      padding: `${vars.space.three} 0`,
    },
  },
})

export const exampleLabel = style({
  color: vars.color.muted,
  fontSize: '13px',
})

export const buttonPair = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.two,
})

export const cardGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  gap: vars.space.four,
  '@media': {
    'screen and (max-width: 600px)': {
      gridTemplateColumns: '1fr',
    },
  },
})

export const cardTitle = style({
  margin: 0,
  fontSize: '15px',
  fontWeight: 600,
})

export const cardDescription = style({
  margin: `${vars.space.two} 0 ${vars.space.four}`,
  color: vars.color.muted,
  fontSize: '13px',
  lineHeight: 1.55,
})

export const badgeShowcase = style({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: vars.space.three,
})

export const footer = style({
  marginTop: vars.space.eight,
  paddingTop: vars.space.four,
  borderTop: `1px solid ${vars.color.border}`,
  color: vars.color.muted,
  fontSize: '12px',
})
