"use client";
import { createTheme } from "@mui/material/styles";

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3", // Change this to your primary color
    },
    secondary: {
      main: "#ff4081", // Change this to your secondary color
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif", // Change this to your preferred font
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
