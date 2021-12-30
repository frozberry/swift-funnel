import { createTheme } from "@mui/material/styles"
import { red } from "@mui/material/colors"

declare module "@mui/material/styles" {
  interface Theme {
    color: {
      black: string
      bg: string
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    color?: {
      black?: string
      bg?: string
    }
  }
}

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#0e182a",
    },
  },
  typography: {
    body1: {
      fontSize: "1.25rem",
      lineHeight: 1.8,
      marginBottom: 24,
      color: "#4E616C",
    },
    h1: {
      color: "white",
      letterSpacing: 1.5,
      textAlign: "center",
      marginTop: "1vh",
      fontSize: "2.5",
    },
    h2: {
      fontSize: "2rem",
      textAlign: "center",
    },
    h3: {
      fontSize: "1.75rem",
      marginBottom: 24,
      alignSelf: "flex-start",
    },
  },
  color: {
    black: "#4E616C",
    bg: "#0e182a",
  },
})

export default theme
