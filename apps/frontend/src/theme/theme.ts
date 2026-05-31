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
  components: {
    MuiPaper: {
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            border: "1px solid rgba(21, 101, 192, 0.12)",
            borderRadius: 10,
            boxShadow: "0 2px 10px rgba(15, 23, 42, 0.06)",
          },
        },
      ],
    },
  },
});
