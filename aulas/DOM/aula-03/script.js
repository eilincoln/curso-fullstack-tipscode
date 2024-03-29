// Seleciona todos os elementos com a classe "minha-classe"
const elementos = document.querySelectorAll('.minha-classe');

// Itera sobre os elementos selecionados
elementos.forEach(elemento => {
    // Faz algo com cada elemento, por exemplo, altera seu texto
    elemento.textContent = 'Texto alterado';
});

/*
    buscar usar mais o querySelector/All para que eu possa usar sempre esse
*/

document.querySelector('li a').style.color = 'red'

document.querySelector('.terceira').style.color = 'yellow'