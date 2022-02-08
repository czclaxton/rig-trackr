import { createTheme, ThemeOptions } from '@mui/material/styles'

export const themeOptions: ThemeOptions = {
  palette: {
    // type: 'dark',
    primary: {
      main: '#0B1120',
    },
    secondary: {
      main: '#0EA5E9',
    },
    background: {
      default: '#0F172A',
      paper: '#1E293B',
    },
    text: {
      secondary: '#94A3B8',
    },
    info: {
      main: '#6366F1',
    },
    error: {
      main: '#F472B6',
    },
    divider: '#64748B',
    common: {
      black: '#fff',
      white: '#000',
    },
  },
}

const theme = createTheme(themeOptions)

export default theme
