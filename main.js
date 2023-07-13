function tocaSom(idAudio) {
    let elemento;
    if (idAudio) {
        elemento = document.querySelector(idAudio);
    }
    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado.');
    }
}
const listasDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < 9; contador++) {
    const tecla = listasDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code == 'Enter' || evento.code === 'Space') {
            tecla.classList.add('ativa');
            //console.log(document.querySelectorAll('button')[contador].textContent);
        }

    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
