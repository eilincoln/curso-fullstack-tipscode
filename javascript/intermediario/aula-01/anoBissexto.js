function bissexto(ano){
    if (ano % 4 === 0 && ano % 100 == 0 && ano % 400 == 0) {
        console.log('É um ano BISSEXTO');
    } else {
        console.log('Não é um ano bissexto');
    }
}

bissexto(2000)
bissexto(2100)

