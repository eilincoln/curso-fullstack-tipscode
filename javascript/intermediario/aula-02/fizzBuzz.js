let output = []

let count = 1

function fizzBuz(){
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
    count++
    console.log(output)
}

