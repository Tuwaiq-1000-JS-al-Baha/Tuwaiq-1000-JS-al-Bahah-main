function sayHello(name) {
    console.log("hello", name)
}


const sayHello2 = function (name) {
    console.log("hello", name)
}

const sayHello3 = () => {
    console.log("hello")
}

function addFive(number) {
    console.log(number + 5)
}
addFive(4)

const addFive2 = function (number) {
    console.log(number + 5)
}

addFive2(12)

const addFive3 = (number) => {
    console.log(number + 5)
}

addFive3(4)

// if one line remove {}
const addFive4 = (number) => console.log(number + 5)

addFive4(6)

// only if one parameter : remove ()
const addFive5 = number => console.log(number + 5)

function add(numberOne, numberTwo) {
    return numberOne + numberTwo
}

console.log(add(12, 4))

const add2 = (numberOne, numberTwo) => numberOne + numberTwo

const addFive51 = (number) => {
    return number + 5
}

const addFive6 = number => number + 5

const sayHello12 = function (name) {
    return "Hello " + name
}

console.log(sayHello12("Hsin"))

const sayHello15 = name => "Hello " + name

console.log(sayHello15("Hsin"))