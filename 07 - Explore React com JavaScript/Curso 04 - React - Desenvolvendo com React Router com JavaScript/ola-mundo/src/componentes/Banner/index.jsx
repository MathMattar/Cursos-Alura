import styles from "./Banner.module.css";
import circuloColoriodo from "assets/circulo_colorido.png";
import minhaFoto from "assets/minha_foto.png";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá, Mundo!</h1>

        <p className={styles.paragrafo}>
          Boas vindas ao meu espaço pessoal! Eu sou Antônio Evaldo, instrutor de
          Front-end da Alura. Aqui compartilho vários conhecimentos, espero que
          aprenda algo novo :)
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColoriodo}
          alt="Circulo colorido"
        />
        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt="Foto do Antonio Evaldo sorrindo"
        />
      </div>
    </div>
  );
}
