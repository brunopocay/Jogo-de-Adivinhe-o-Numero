const menorValor = 1
const maiorValor = 999
const numeroSecreto = gerarNumeroAleatório()

function gerarNumeroAleatório(){
    return parseInt(Math.random()* maiorValor + 1)
}

const elementoMenor = document.getElementById("menor-valor")
elementoMenor.innerHTML = menorValor;

const elementoMaior = document.getElementById('maior-valor')
elementoMaior.innerHTML = maiorValor;

console.log(numeroSecreto)