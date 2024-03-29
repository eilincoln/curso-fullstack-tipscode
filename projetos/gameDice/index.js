// criação do source aleatório para colocar como atributo da imagem 1
let randomNumber1 = Math.floor(Math.random() * 6) + 1
let randomDiceImage = 'dice' + randomNumber1 + '.png' //dice2.png
let randomImageSource = './img/' + randomDiceImage //./img/dice4.png

// Alteração dos atributos da imagem 1
let image1 = document.querySelectorAll('img')[0]
image1.setAttribute('src', randomImageSource)

// ==========================================================================================================================

// Criação do source aleatório para colocar como atributo da imagem 2
let randomNumber2 = Math.floor(Math.random() * 6) + 1
let randomDiceImage2 = 'dice' + randomNumber2 + '.png' //dice2.png
let randomImageSource2 = './img/' + randomDiceImage2 //./img/dice4.png

// Altarção dos Atributos da imagem 2
document.querySelectorAll('img')[1].setAttribute('src', randomImageSource2)

if(randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = '🏆 Jogador 1 venceu'
} else if (randomNumber2 > randomNumber1) {
    document.querySelector('h1').innerHTML = '🏆 Jogador 2 venceu'
} else {
    document.querySelector('h1').innerHTML = '🏆 EMPATE'
}
