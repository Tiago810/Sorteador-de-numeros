let btnReiniciar = document.getElementById('btn-reiniciar');
let btnSortear = document.getElementById('btn-sortear');
window.onload = function () {
    btnReiniciar.disabled = true;
}
function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let possiblidades = ate-de+1
    if (quantidade > possiblidades || quantidade <= 0) {
        alert ("Preenchimento inválido");
    } else {
    let numeros = [];
    let numero;
    for (let i = 0; i < quantidade; i++) {
        numero = gerarNumeros(de, ate);
        while (numeros.includes(numero)) {
            numero = gerarNumeros(de, ate);
        }
        numeros.push(numero);   
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numeros}</label>`;
    alterarStatusBotao();
    }
}

function gerarNumeros(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function alterarStatusBotao() {
    if (btnReiniciar.classList.contains('container__botao-desabilitado')) {
        btnReiniciar.classList.remove('container__botao-desabilitado');
        btnReiniciar.classList.add('container__botao');
        btnSortear.classList.remove('container__botao');
        btnSortear.classList.add('container__botao-desabilitado');
        btnSortear.disabled = true;
        btnReiniciar.disabled = false;
    } else {
        btnReiniciar.classList.remove('container__botao');
        btnReiniciar.classList.add('container__botao-desabilitado');
        btnSortear.classList.remove('container__botao-desabilitado');
        btnSortear.classList.add('container__botao');
        btnSortear.disabled = false;
        btnReiniciar.disabled = true;
    }
}

function reiniciar() {
    quantidade.value = '';
    de.value = '';
    ate.value = '';
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    alterarStatusBotao();
}