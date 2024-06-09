let primMedida = document.querySelector("#primMedida");
let segnMedida = document.querySelector("#segnMedida");
let resultado = document.querySelector("#resultado");

function CalcularMetroQuadrado(){
    let varPrimMedida = Number(primMedida);
    let varSegnMedida = Number(segnMedida);

    let varResultado = (varPrimMedida * varSegnMedida)
    
    varResultado.textContent = (resultado);
}

btCalcular .onclick