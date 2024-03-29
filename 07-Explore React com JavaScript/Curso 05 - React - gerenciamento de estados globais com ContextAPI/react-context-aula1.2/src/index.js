import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { StylesProvider } from "@material-ui/core/styles";
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Rotas from "./rotas";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2A9F85",
    },
    secondary: {
      main: "#FF7070",
    },
  },
});

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Rotas />
      </ThemeProvider>
    </StylesProvider>
  </React.StrictMode>
);
