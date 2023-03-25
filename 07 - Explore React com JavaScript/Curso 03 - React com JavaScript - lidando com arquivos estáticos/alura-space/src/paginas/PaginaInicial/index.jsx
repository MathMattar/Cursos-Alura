import style from "./PaginaInicial.module.scss";

import Cabecalho from "componentes/Cabecalho";
import Menu from "componentes/Menu";
import Banner from "componentes/Banner";
import Rodape from "componentes/Rodape";
import Galeria from "componentes/Galeria";
import Populares from "componentes/Populares";

export default function PaginaInicial() {
  return (
    <>
      <Cabecalho />
      <main>
        <div className={style.principal}>
          <Menu />
          <Banner />
        </div>
        <div className={style.galeria}>
          <Galeria />
          <Populares />
        </div>
      </main>
      <Rodape />
    </>
  );
}
