for (let i = 0; i <= 10; i++) {
    console.log(i)
}

console.log("----")

for (let i = 10; i >= 0; i--) {
    console.log(i)
}
console.log("----")
for (let i = 4; i >= -16; i--) {
    console.log(i)
}
console.log("----")

for (let i = 8; i <= 41; i += 5) {
    console.log(i)
}

console.log("----")

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i, "fizzbuzz")
    } else if (i % 5 === 0) {
        console.log(i, "buzz")
    } else if (i % 3 === 0) {
        console.log(i, "fizz")
    } else {
        console.log(i)
    }
}

console.log("----")

for (let i = 0; i <= 20; i++) {
    if (i === 0) {
        console.log(i, "is not even or odd")
    } else if (i % 2 === 0) {
        console.log(i, "is even")
    } else {
        console.log(i, "is odd")
    }
}

console.log("----")
// i : 66
for (let i = 0; i <= 100; i++) {
    if (i < 60) {
        console.log(i, "F")
    } else if (i < 70) {
        console.log(i, "D")
    } else if (i < 80) {
        console.log(i, "C")
    } else if (i < 90) {
        console.log(i, "B")
    } else {
        console.log(i, "A")
    }
}