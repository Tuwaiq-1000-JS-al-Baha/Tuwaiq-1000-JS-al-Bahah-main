function sayHi(name1) {
    return `
    hi ${name1} and ${name1}.
    hello
    `
    // return "hi " + name1 + " and " + name1 + "."
}

const sayHello = function (name1) {
    return 'hello ' + 'my friend ' + name1 + ' !!'
}

const sayBye = (name1, name2) => {
    console.log('bye ' + name1)
}

const sayBye2 = (name1, name2) => 'bye ' + name1

console.log(sayHi("john"))
//console.log(sayHello("bob"))
//console.log(sayBye("john"))