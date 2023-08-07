import estilos from './Cabecalho.module.scss';

const Cabecalho = () => {
  return (
    <header className={estilos.cabecalho}>
      <div
        className={estilos.cabecalho__logo}
        role="img"
        aria-label="Logo do Sorteador"
      ></div>
      <img
        className={estilos.cabecalho__imagem}
        src="/imagens/participante.png"
        alt="Participante com um presente na mão"
      />
    </header>
  );
};

export default Cabecalho;
