// =============================================== MODIFICAÇÕES NA hexa.html ===================================================

// Array para criação da config hexa
const hexa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

// selecionando os botões
const btn = document.getElementById('btn');
const color = document.querySelector('.span-color');

// colocando uma escuta no botão
btn.addEventListener('click', function(){

    let hexaColor = '#'

    for(let i = 0; i < 6; i++) {
        hexaColor = hexaColor + hexa[getRandomNumbers()]
    }

    const mainColor = document.querySelector('#main-color')
    mainColor.style.backgroundColor = hexaColor

   color.textContent = hexaColor
})

function getRandomNumbers() {
    return Math.floor(Math.random() * hexa.length)
}