let nome = document.querySelector("#nome");
let idade = document.querySelector("#idade");
let btCalcular = document.querySelector("#btCalcular");
let diasVividos = document.querySelector("#diasVividos");
let nomeFicha = document.querySelector("#nomeFicha");

function calcular(){
    let varIdade = Number(idade.value);
    let varDiasVividos = (varIdade * 365);

    diasVividos.textContent = varDiasVividos;

    let varNome = String(nome.value);
    nomeFicha.textContent = varNome;
}

btCalcular.onclick=function(){
    calcular();
}