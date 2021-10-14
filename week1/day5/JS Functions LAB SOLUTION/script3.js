// function youRock(name) {
//     let result = "you rock " + name + "!"
//     return result
// }

// // console.log(youRock("ali"))

// function square(number) {
//     return number ** 2
// }

// console.log(square(3))


// function cube(number) {
//     return number ** 3
// }

// console.log(cube(3))


// function power(firstNumber, secondNumber) {
//     return firstNumber ** secondNumber
// }

// console.log(power(5, 3))


function calculator(firstNumber, secondNumber, operation) {
    if (typeof firstNumber !== "number" || typeof secondNumber !== "number") {
        return "calculator only accepts numbers"
    } else if (operation === "add") {
        return firstNumber + secondNumber
    } else if (operation === "sub") {
        return firstNumber - secondNumber
    } else if (operation === "multiply") {
        return firstNumber * secondNumber
    } else if (operation === "divide") {
        return firstNumber / secondNumber
    } else {
        return "calculator can only add, subtract, divide, or multiply"
    }
}

console.log(calculator(1, 3, "power"))