let valorGasolina = document.querySelector("#valorGasolina");
let valorPago = document.querySelector("#valorPago");
let litrosColocados = document.querySelector("#litrosColocados");
let btCalcular = document.querySelector("#btCalcular");

function calcular(){
    let varValorGasolina = Number(valorGasolina.value);
    let varValorPago = Number(valorPago.value);

    let varLitrosColocados = (varValorPago / varValorGasolina);

    litrosColocados.textContent = Number(varLitrosColocados.toFixed(3));
}

btCalcular.onclick = function(){
    calcular();
}