const nomes = ["Alice", "Bob", "Lincoln", "Daniela", "Eduardo", "Fernanda", "Gabriel", "Helena", "Igor", "Julia", "Klaus", "Larissa", "Marcelo", "Natalia", "Otavio", "Paula", "Quiteria", "Rafael", "Sabrina", "Thiago", "Ursula", "Valdir", "Wanessa", "Xavier", "Yasmin", "Zeca"];

// Lembrar que o array sempre começa com 0
// let meuNome = nomes[2];

// console.log(meuNome);
// console.log(nomes.length);
// console.log(nomes)

function entrada(temNome) {
    if(nomes.includes(temNome)) {
        alert('Você pode entrar!');
    } else {
        alert('Você NÃO pode entrar!');
    }
}
let nomeUsuario = prompt('digite seu nome: ');

entrada(nomeUsuario);
console.log(typeof(nomes.includes('Lincoln')));
