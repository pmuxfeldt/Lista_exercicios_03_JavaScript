let quantCavalos = document.querySelector("#quantCavalos");
let resultado = document.querySelector("#resultado");
let btCalcular = document.querySelector("#btCalcular");

function calcularFerraduras(){
    let varQuantCavalor = Number(quantCavalos.value);
    let varResultado = (varQuantCavalor * 4);
    resultado.textContent = Number(varResultado);
}

btCalcular.onclick = function(){
    calcularFerraduras();
}