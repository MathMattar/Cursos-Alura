import Cabecalho from 'components/Cabacalho'
import Container from 'components/Container'
import Rodape from 'components/Rodape'
import FavoritosProvider from 'contextos/Favoritos'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function PaginaBase() {
  return (
    <main>
        <Cabecalho/>
        <FavoritosProvider>
            <Container>
                <Outlet />
            </Container>
        </FavoritosProvider>
        <Rodape />
    </main>
  )
}
