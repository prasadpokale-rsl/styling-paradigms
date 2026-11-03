import { globalStyle } from '@vanilla-extract/css'

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
})

globalStyle('html, body, #root', {
  minHeight: '100%',
  margin: 0,
})

globalStyle('body', {
  minWidth: '320px',
  fontFamily:
    'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  WebkitFontSmoothing: 'antialiased',
  textRendering: 'optimizeLegibility',
})

globalStyle('button, a', {
  font: 'inherit',
})

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
})
