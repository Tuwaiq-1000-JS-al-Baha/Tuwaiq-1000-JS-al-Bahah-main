function add(firstNumber, secondNumber) {
    let result = firstNumber + secondNumber
    return result
}

function sub(firstNumber, secondNumber) {
    let result = firstNumber - secondNumber
    return result
}

let a = 5
a = add(a, 10)

a = sub(a, 2)

console.log("the result is " + a)
// => 13

