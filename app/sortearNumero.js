const menorValor = 1
const maiorValor = 999
const numeroSecreto = gerarNumeroAleat√≥rio()

function gerarNumeroAleat√≥rio(){
    return parseInt(Math.random()* maiorValor + 1)
}

const elementoMenor = document.getElementById("menor-valor")
elementoMenor.innerHTML = menorValor;

const elementoMaior = document.getElementById('maior-valor')
elementoMaior.innerHTML = maiorValor;

console.log(numeroSecreto)