import { createTheme } from "@mui/material/styles"
import { red } from "@mui/material/colors"

declare module "@mui/material/styles" {
  interface Palette {
    accordion: Palette["primary"]
    bgLight: Palette["primary"]
  }
  interface PaletteOptions {
    accordion: PaletteOptions["primary"]
    bgLight: PaletteOptions["primary"]
  }
}

// Create a theme instance.
const theme = createTheme({
  palette: {
    // primary: {
    //   main: "#556cd6",
    // },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#0e182a",
    },
    accordion: {
      main: "#385263",
    },
    bgLight: {
      main: "#F3F7F9",
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
      fontSize: "2.5rem",
      fontWeight: "bold",
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
})

export default theme
