'use client'
import { Roboto } from 'next/font/google'
import { ReactNode, useMemo, useState } from 'react'
import { AppRouterCacheProvider as MuiThemeProviderForNextJs } from '@mui/material-nextjs/v13-appRouter'
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline, ThemeOptions } from '@mui/material'
import { PaletteOptions, SimplePaletteColorOptions } from '@mui/material'
import GlobalCssPriority from '@/providers/global-css-priority'

// Custom theme color
const COLOR_PRIMARY: SimplePaletteColorOptions = {
  main: '#64B5F6',
  contrastText: '#000000',
  // light: '#64B5F6',
  // dark: '#64B5F6',
}

const COLOR_SECONDARY: SimplePaletteColorOptions = {
  main: '#EF9A9A',
  contrastText: '#000000',
  // light: '#EF9A9A',
  // dark: '#EF9A9A',
}

/**
 * MUI colors set to use in theme.palette
 */
export const PALETTE_COLORS: Partial<PaletteOptions> = {
  primary: COLOR_PRIMARY,
  secondary: COLOR_SECONDARY,
  // error: COLOR_ERROR,
  // warning: COLOR_WARNING;
  // info: COLOR_INFO;
  // success: COLOR_SUCCESS;
}

// default font
export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

// custom theme dark
export const DARK_THEME: ThemeOptions = {
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    mode: 'dark',
    // background: {
    //   paper: '#424242', // Gray 800 - Background of "Paper" based component
    //   default: '#121212',
    // },
    ...PALETTE_COLORS,
  },
}

export const LIGHT_THEME: ThemeOptions = {
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    mode: 'light',
    // background: {
    //   paper: '#f5f5f5', // Gray 100 - Background of "Paper" based component
    //   default: '#FFFFFF',
    // },
    ...PALETTE_COLORS,
  },
}

interface Props {
  children: ReactNode
}

function getThemeByDarkMode(darkMode: boolean) {
  return darkMode ? createTheme(DARK_THEME) : createTheme(LIGHT_THEME)
}

export default function MuiProvider({ children }: Props) {
  const [isDark, setIsDark] = useState(true)

  const currentTheme = useMemo(
    () => getThemeByDarkMode(isDark),
    [isDark], // Observe AppStore and re-create the theme when .darkMode changes
  )

  return (
    <GlobalCssPriority>
      <MuiThemeProviderForNextJs>
        <MuiThemeProvider theme={currentTheme}>
          <CssBaseline /* MUI Styles */ />
          {children}
        </MuiThemeProvider>
      </MuiThemeProviderForNextJs>
    </GlobalCssPriority>
  )
}
