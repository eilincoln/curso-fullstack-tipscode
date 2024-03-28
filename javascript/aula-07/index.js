function getPao(dinheiro, custoPorPao) {
    console.log("SairDeCasa");
    console.log("MoveDireita");
    console.log("MoveDireita");
    console.log("MoveCima");
    console.log("MoveCima");
    console.log("MoveCima");
    console.log("MoveCima");
    console.log("O robo vai comprar " + calcPao(dinheiro, custoPorPao) + " no mercado");
    
    return troco(dinheiro, custoPorPao);
}

function calcPao(valorDoDinheiro, custoPorPao) {
    let numeroDePaes = Math.floor(valorDoDinheiro / custoPorPao);

    return numeroDePaes;
}

function troco(dinheiroInicial, custoPorPao) {
    let trocoDoPao = dinheiroInicial % custoPorPao;
}

getPao(4, 1.5)