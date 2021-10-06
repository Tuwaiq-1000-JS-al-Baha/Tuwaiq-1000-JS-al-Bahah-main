const sayHello = function () {
    console.log('hello')
}

const sayBye = function () {
    console.log('bye!')
}

const add = function (number1, number2, callback) {
    console.log(number1, number2, callback)
    console.log(number1 + number2)

    if (typeof callback === "function")
        callback()
    console.log('end of function')
}

add(18, 2, sayHello)