// function calculator(number1, number2, operation) {
//     if (typeof number1 !== "number" || typeof number2 !== "number") {
//         return "calculator only accepts numbers"
//     }
//     if (typeof operation !== "function") {
//         return "operation should be a function"
//     } else if (operation === add || operation === sub || operation === divide || operation === multiply) {
//         return operation(number1, number2)
//     }
//     return "calculator can only add, subtract, divide, or multiply"

// }

function calculator(number1, number2, operation) {
    return operation(number1, number2)
}


function add(number1, number2) {
    return number1 + number2
}

function sub(number1, number2) {
    return number1 - number2
}

function multiply(number1, number2) {
    return number1 * number2
}

function divide(number1, number2) {
    return number1 / number2
}



console.log(calculator(1, 2, add))
console.log(calculator(1, 2, sub))
console.log(calculator(1, 2, multiply))
console.log(calculator(1, 2, divide))
console.log(calculator(1, 2, "eoife"))
console.log(calculator(1, 2, Math.log))
console.log(calculator("cat", 2, add))
