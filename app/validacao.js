function verificaValorValido(chute){
    const numero = +chute 

    if (chuteInvalido(numero) && chute != "game over"){
        elementoChute.innerHTML += '<div> Valor Inválido </div>'
        return
    }

    if (verificarNumero(numero)){
        elementoChute.innerHTML += `<div>Valor inválido: Fale um numero entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if(chute === "game over"){
        document.body.innerHTML = `
            <h1>GAME OVER</h1>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `    
        document.body.style.backgroundColor = "black";
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O numero secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if(numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O numero secreto é menor <i class="fa-solid fa-circle-down"></i></i></div>
        `
    } else {
        elementoChute.innerHTML += `<div>O numero secreto é maior <i class="fa-solid fa-circle-up"></i></i></div>
        `
    }
    

}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function verificarNumero(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e =>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})

