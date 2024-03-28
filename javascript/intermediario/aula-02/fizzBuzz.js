let output = []



function fizzBuz(){
    for(let count = 1; count <= 50; count++ ) {
        if(count % 3 === 0 && count % 5 === 0){
            output.push('FizzBuzz')
        }
    
    
        if (count % 3 === 0 ) {
            output.push('Fizz')
        } else if(count % 5 === 0) {
            output.push('Buz')
        } else {
            output.push(count)
        }
    }
    console.log(output)
}

fizzBuz()

