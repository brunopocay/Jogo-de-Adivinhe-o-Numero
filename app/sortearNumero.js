const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatório()

function gerarNumeroAleatório(){
    return parseInt(Math.random()* maiorValor + 1)
}

console.log("numero secreto:", numeroSecreto)

const elementoMenor = document.getElementById("menor-valor")
elementoMenor.innerHTML = menorValor;

const elementoMaior = document.getElementById('maior-valor')
elementoMaior.innerHTML = maiorValor;

