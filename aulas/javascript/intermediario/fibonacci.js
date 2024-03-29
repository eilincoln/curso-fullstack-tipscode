// function fibonacci(n) {
//     if (n <= 1) {
//         return n;
//     } else {
//         return fibonacci(n - 1) + fibonacci(n - 2);
//     }
// }

// console.log(fibonacci(10))

function fibonacci(n) {
    let output = []
    if(n === 1) {
        output = [0]
    } else if(n === 2) {
        output = [0, 1]
    } else {
        output = [0, 1]
        
        for(let i = 2;i < n; i++){
            output.push(output[output.length - 2] + output[output.length - 1])
        }
    }
    return output
}

console.log(fibonacci(500))