import { ThemeProvider } from "@mui/material";

import "./App.css";
import theme from "./theme";
import Header from "./components/Header";
import Gallery from "./modules/gallery";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Gallery />
    </ThemeProvider>
  );
}

export default App;
