import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Roboto,sans-serif",
  },
  palette: {
    primary: {
      light: "#E0E5F9",
      main: "#D7DEFF",
      dark: "#200466",
      contrastText: "#000",
    },
    secondary: {
      //light: "#ff7961",
      main: "#3459E5",
      //dark: "#ba000d",
      contrastText: "#fff",
    },
  },
  components: {},
});
