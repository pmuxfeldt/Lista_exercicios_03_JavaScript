let valorRaio = document.querySelector("#valorRaio");
let valorArea = document.querySelector("#valorArea");
let btCalcular = document.querySelector("#btCalcular");

function calcular(){
    let varValorRaio = (valorRaio.value);

    let varValorArea = (varValorRaio ** 2) * 3.14

    valorArea.textContent = String(varValorArea);
}

btCalcular.onclick = function(){
    calcular();
}