// Exercicio calc imc
function calcImc(peso, altura) {
    let imc = peso / (Math.pow(altura, 2));
    imc = Math.round(imc*100)/100;

    if(imc < 18.5) {
        return console.log('Abaixo do Peso -> ' + imc);
    } else if(imc >= 18.5 && imc < 24.9) {
        return console.log('Peso Normal -> ' + imc);
    } else if(imc >= 25 && imc < 29.9) {
        return console.log('Sobrepeso -> ' + imc);
    } else if(imc >= 30 && imc < 34.9) {
        return console.log('Obesidade Grau I -> ' + imc);
    } else if(imc >= 35 && imc < 39.9) {
        return console.log('Obesidade Grau II -> ' + imc);
    } else if(imc >= 40) {
        return console.log('Obesidade Grau III ou Mórbida -> ' + imc);
    }
}
calcImc(65, 1.75);