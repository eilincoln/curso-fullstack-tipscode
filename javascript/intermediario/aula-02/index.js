// let numeros = Math.random();

// numeros = numeros * 6;

// numeros = Math.floor(numeros + 1);

// console.log(numeros);

/*
    Criar um número aleatório entre 1 a 100 e mostrar no alert
*/
let score = Math.floor((Math.random() * 100)) + 1;

if(score > 70) {
    alert("Parabés!!!! Nível bom de compatibilidade! A porcentagem entre vocês é de: " + score + "%");
} else if (score > 30 && score <= 70){
    alert("A porcentagem entre vocês é BEM MÉDIA! de: " + score + "%");
} else {
    alert("A porcentagem entre vocês é RUIM! de: " + score + "%");
}
