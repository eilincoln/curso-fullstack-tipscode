/*
    aqui eu posso usar o query que vai me ajudar a pegar o seletor igual eu pego no css
*/

const h1 = document.querySelector('h1')
h1.style.color = 'red'

// aqui eu posso pegar de forma mais especifica
const maisEspec = document.querySelector('li a')

// Selecionando um elemento pela sua classe
const elemento = document.querySelector('.minha-classe');

// Selecionando um elemento pelo seu ID
const elemento2 = document.querySelector('#meu-id');

// Selecionando um elemento pelo nome da tag
const elemento3 = document.querySelector('div');

// Selecionando um elemento pela sua classe dentro de outro elemento
const elemento4 = document.querySelector('div .minha-classe');

// Selecionando um elemento pelo seu ID dentro de outro elemento
const elemento5 = document.querySelector('.outro-elemento #meu-id');

