import { createTheme } from '@vanilla-extract/css'

export const [themeClass, vars] = createTheme({
  color: {
    primary: '#67eb42',
    primaryHover: '#3451cb',
    primarySoft: '#edf1ff',
    text: '#21283a',
    muted: '#747c8e',
    canvas: '#f7f8fb',
    surface: '#ffffff',
    border: '#e5e8ef',
    danger: '#c64050',
    dangerHover: '#a92f3e',
    dangerSoft: '#fff0f1',
    dangerBorder: '#eab9bf',
    success: '#247451',
    successSoft: '#e9f5ee',
    warning: '#9a6915',
    warningSoft: '#fff5df',
    white: '#ffffff',
    focus: '#7b91f1',
  },
  space: {
    one: '4px',
    two: '8px',
    three: '12px',
    four: '16px',
    five: '20px',
    six: '24px',
    eight: '32px',
    ten: '40px',
    twelve: '48px',
  },
  radius: {
    small: '6px',
    medium: '10px',
    large: '16px',
    pill: '999px',
  },
  font: {
    body: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  shadow: {
    card: '0 2px 8px rgba(33, 40, 58, 0.04)',
  },
})
