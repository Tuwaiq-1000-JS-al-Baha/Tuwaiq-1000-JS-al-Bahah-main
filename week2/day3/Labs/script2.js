function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber
}

// i want a function calculate that takes 3 parameters
// first number, second number and operation
// operation is a string: "add" or "subtract" or "multiply" or "divide"
// we need to use the functions
// depending on operation gives result

function calculate(number1, number2, operation) {
    return operation(number1, number2)

}

// console.log(calculate(2, 3, multiply))
// console.log(calculate(5, 3, add))
// console.log(calculate(77, 3, subtract))
// console.log(calculate(2, 3, divide))
//console.log(calculate(14, 2, (num1, num2) => num1 - num2))


const addFive = (num) => 5 + num


console.log(addFive(8))