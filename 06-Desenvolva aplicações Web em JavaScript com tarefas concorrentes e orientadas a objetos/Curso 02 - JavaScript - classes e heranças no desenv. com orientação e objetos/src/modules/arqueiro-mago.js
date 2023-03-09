import { Arqueiro } from "./arqueiro.js";
import { Mago } from "./mago.js";
import { Personagem } from "./personagem.js";

export class ArqueiroMago extends Personagem {
  ladoArqueiro;
  ladoMago;
  static tipo = "ArqueiroMago";
  static descricao = "Detentor de lancas e flechas mágicas!";

  constructor(nome, desteza, elementoMagico, levelMagicio, inteligente) {
    super(nome);
    this.ladoArqueiro = new Arqueiro(nome, desteza);
    this.ladoMago = new Mago(nome, elementoMagico, levelMagicio, inteligente);
  }

  obterInsignia() {
    return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`;
  }
}
