import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#212121",
      light: "#484848",
      dark: "#000000",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#b71c1c",
      light: "#f05545",
      dark: "#750000",
      contrastText: "#ffffff",
    },
  },
  typography: {
    h1: {
      fontSize: "1.8rem",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
    h3: {
      fontSize: "1.0rem",
    },
  },
});

export default theme;
