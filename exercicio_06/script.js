let pesoPrato = document.querySelector("#pesoPrato");
let valorPrato = document.querySelector("#valorPrato");
let btCalcular = document.querySelector("#btCalcular");

function calculoValorPorPeso(){
    let varPesoPrato = Number(pesoPrato.value);
    let varValorPrato = (varPesoPrato * 12);

    valorPrato.textContent = String(varValorPrato);
}

btCalcular.onclick = function(){
    calculoValorPorPeso();
}