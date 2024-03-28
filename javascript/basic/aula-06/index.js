// function getPao(pao) {
//     console.log("SairDeCasa");
//     console.log("MoveDireita");
//     console.log("MoveDireita");
//     console.log("MoveCima");
//     console.log("MoveCima");
//     console.log("MoveCima");
//     console.log("MoveCima");
//     let valorPao = Math.floor(pao / 1.5);
//     console.log("O robo vai comprar " + valorPao + " no mercado")
// }

// getPao(1.5)

// console.log();


function lifeInWeeks(age) {
    let yearsRemaining = 90 - age;
    let days = yearsRemaining * 365;
    let weeks = yearsRemaining * 52;
    let months = yearsRemaining * 12;

    console.log('Você tem ' + days + "dias " + weeks + " semanas " + months + "meses restantes")
}

lifeInWeeks(20);