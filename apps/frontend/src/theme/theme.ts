import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1565c0",
    },
    secondary: {
      main: "#455a64",
    },
    background: {
      default: "#f7f9fb",
      paper: "#ffffff",
    },
  },
});
