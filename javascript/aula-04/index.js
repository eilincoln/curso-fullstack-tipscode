/**
 * Opção para poder deixar texto em caixa alta.
 */

/*
Código comentado para poder fazer o exercicio proposto.

let nome = "Kami";
nome = nome.toUpperCase(); // aqui eu coloco a variável em outra variavel para poder ficar visivel 

nome = nome.toLowerCase();

console.log(nome);

*/

/*========================================================================================*/

let nomeDoUsuario = prompt("Digite seu nome: ");

let primeiraLetra = nomeDoUsuario.slice(0,1);

let primeiraLetraCaixaAlta = primeiraLetra.toUpperCase();

let restoNome = nomeDoUsuario.slice(1, nomeDoUsuario.length);

let resultado = primeiraLetraCaixaAlta + restoNome;

alert(resultado);