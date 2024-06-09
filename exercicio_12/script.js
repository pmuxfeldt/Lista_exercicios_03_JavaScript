let valorEntrada = document.querySelector("#valorEntrada");
let centena = document.querySelector("#centena");
let dezena = document.querySelector("#dezena");
let unidade = document.querySelector("#unidade");
let btCalcular = document.querySelector("#btCalcular");

function calcular(){
    let varValorEntrada = Number(valorEntrada.value);

    let varUnidade = (varValorEntrada % 10);
    let varDezena = Math.floor((varValorEntrada % 100) / 10);
    let varDezenaRedondo = (varDezena * 10);
    let varCentena = Math.floor(varValorEntrada / 100) * 100;

    centena.textContent = (varCentena);
    dezena.textContent = (varDezenaRedondo);
    unidade.textContent = (varUnidade);
}

btCalcular.onclick = function(){
    calcular();
}