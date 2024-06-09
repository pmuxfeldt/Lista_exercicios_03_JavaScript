let quantCamisaP = document.querySelector("#quantCamisaP");
let quantCamisaM = document.querySelector("#quantCamisaM");
let quantCamisaG = document.querySelector("#quantCamisaG");
let valorAPagar = document.querySelector("#valorAPagar");
let btCalcular = document.querySelector("#btCalcular");

function calcular(){
    let varCamisaP = Number(quantCamisaP.value);
    let varCamisaM = Number(quantCamisaM.value);
    let varCamisaG = Number(quantCamisaG.value);

    let varValorAPagar = ((varCamisaP * 10)+(varCamisaM * 12)+(varCamisaG * 15))
    valorAPagar.textContent = Number(varValorAPagar);
}

btCalcular.onclick = function(){
    calcular();
}