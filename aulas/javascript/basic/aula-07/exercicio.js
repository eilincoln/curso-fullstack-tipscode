// aqui faço o passo a passo para poder entender o código.
let peso = 85;
let altura = 1.75;

let imc = peso / (altura * altura);

console.log(Math.round(imc*100)/100);

//aqui já transformo o código na func para poder resolver o exercício
function calcImc(peso, altura) {
    let imc = peso / (altura * altura);
    return console.log(Math.round(imc*100)/100);
}

calcImc(85, 1.75);