const grades = [100, 20, 55, 66]

// 100 + 20 + 55 + 66
// = 371
let total = 0
for (let i = 0; i < grades.length; i++) {
    total = total + grades[i]
}
// console.log("total:", total)

// 371 / 4

let average = total / grades.length

// console.log(average)

const numbers = [1, 7, 2, 35, 42, 46]

// sum of even numbers

// 2, 42, 46 get even numbers
let totalEven = 0
for (let i = 0; i < numbers.length; i++) {
    console.log("i", i)
    console.log("numbers[i]", numbers[i])
    console.log('----')
    if (numbers[i] % 2 === 0) {
        totalEven += numbers[i]
    }
}

console.log("total even:", totalEven)



// 2 + 42 + 46 sum even numbers

console.log('---')

const prices2 = [14, 60, -2, 45, -4]

// min: -4
// 60

let max = -Infinity

for (let i = 0; i < prices2.length; i++) {
    if (prices2[i] > max) {
        max = prices2[i]
    }
}

console.log("max:", max)

let min = Infinity

for (let i = 0; i < prices2.length; i++) {
    if (prices2[i] < min) {
        min = prices2[i]
    }
}

console.log("min:", min)

console.log(Math.max(...prices2))
console.log(Math.min(...prices2))