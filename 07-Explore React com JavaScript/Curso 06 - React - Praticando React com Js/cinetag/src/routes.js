import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import Cabecalho from "components/Cabacalho";
import Rodape from "components/Rodape";
import Container from "components/Container";
import FavoritosProvider from "contextos/Favoritos";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <FavoritosProvider>
          <Routes>
            <Route path="/" element={<Inicio />}></Route>
            <Route path="/favoritos" element={<Favoritos />}></Route>
          </Routes>
        </FavoritosProvider>
        <Rodape />
      </Container>
    </BrowserRouter>
  );
}
