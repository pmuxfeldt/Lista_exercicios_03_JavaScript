let salarioAtual = document.querySelector("#salarioAtual");
let salarioAumento = document.querySelector("#salarioAumento");
let salarioFinal = document.querySelector("#salarioFinal");
let btCalcular = document.querySelector("#btCalcular");
let segSalarioAtual = document.querySelector("#segSalarioAtual");

function calcular(){
    let varSalarioAtual = Number(salarioAtual.value);

    let varSalarioAumento = ((varSalarioAtual * 0.15) + varSalarioAtual);

    let varSalarioFinal = (varSalarioAumento - (varSalarioAumento * 0.08))

    segSalarioAtual.textContent = Number(varSalarioAtual);
    salarioAumento.textContent = Number(varSalarioAumento);
    salarioFinal.textContent = Number(varSalarioFinal);
}

btCalcular.onclick = function(){
    calcular();
}