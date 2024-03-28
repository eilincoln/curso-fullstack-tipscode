const nomes = [
    "João",
    "Maria",
    "Pedro",
    "Ana",
    "Carlos",
    "Mariana",
    "Lucas",
    "Gabriela",
    "André",
    "Juliana"
];

function almoco(nomes) {
    // aqui eu vejo o tamanho do array
    let totalPessoas = nomes.length;

    let posicaoAleatroria = Math.floor(Math.random() * totalPessoas);

    let pessoaAleatroria = nomes[posicaoAleatroria]

    return pessoaAleatroria + ' vai pagar o almoço'
}

console.log(almoco(nomes))