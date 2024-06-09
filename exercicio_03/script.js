let quantPaoFrances = document.querySelector("#quantPaoFrances");
let quantBroa = document.querySelector("#quantBroa");
let resultado = document.querySelector("#resultado");
let btCalcular = document.querySelector("#btCalcular");

function calcular(){
    let varPaoFrances = Number(quantPaoFrances.value);
    let varBroas = Number(quantBroa.value);
    let varResultado = (varPaoFrances * 0.12) + (varBroas * 1.50);

    let varDezPercent = (varResultado * 0.1)

    resultado.textContent = String(varDezPercent);
}


btCalcular.onclick=function(){
    calcular();
}

