const number = 12

if (true) {
    const number = 1
    const number2 = 24
    if (true) {
        const number = 6
        const number3 = 100
        console.log('inside second if', number)
        console.log('inside second if', number2)
        console.log('inside second if', number3)
        if (true) {
            console.log('i love number3', number3)
        }
        for (var i = 0; i < 10; i++) {
            var name1 = "alice"
            console.log('dancing!!', i, name1)
        }
        console.log('after the dance', i, name1)
    }
    const number3 = 25
    console.log('number: inside if', number)
    console.log('number2: inside if', number2)
    console.log('number3: inside if', number3)
}

console.log(number)
console.log(number2)
