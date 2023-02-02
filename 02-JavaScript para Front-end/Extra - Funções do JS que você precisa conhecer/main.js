//function declaration permite ser chamada antes de sua declaração, através do hoisting

essaPalavraEUmPalindromo();

function essaPalavraEUmPalindromo() {
  let palavra = "rever";
  let separandoAsLetras = palavra.split("");
  let palavraInvertida = separandoAsLetras.reverse("");
  palavraInvertida = palavraInvertida.join("");
  if (palavra == palavraInvertida) {
    console.log("A palavra " + palavra + " é um palindromo!");
  } else {
    console.log("A palavra " + palavra + " não é um palindromo!");
  }
}

//function expression sempre é declarada dentro de uma constante. Não aceita o comportamento de hoisting

const essaPalavraEUmPalindromo = function (palavra) {
  let separandoAsLetras = palavra.split("");
  let palavraInvertida = separandoAsLetras.reverse("");
  palavraInvertida = palavraInvertida.join("");
  if (palavra == palavraInvertida) {
    console.log("A palavra " + palavra + " é um palindromo!");
  } else {
    console.log("A palavra " + palavra + " não é um palindromo!");
  }
};

essaPalavraEUmPalindromo("radar");
