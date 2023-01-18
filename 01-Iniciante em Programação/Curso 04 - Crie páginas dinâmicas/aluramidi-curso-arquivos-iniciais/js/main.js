function tocaSom(selectorAudio) {
    const element = document.querySelector(selectorAudio);

    if (element && element.localName === 'audio') {
        element.play()
    }
    else {
        console.log('Elemento não encontrado ou seletor invalido.');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

/*------------------------------------------------------------------------------

let contador = 0;
//enquanto
while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function () {
        tocaSom(idAudio);
    };
    contador = contador + 1;
}

------------------------------------------------------------------------------*/

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}` //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (event) {
        if (event.code === 'Enter' || event.code === 'Space') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
