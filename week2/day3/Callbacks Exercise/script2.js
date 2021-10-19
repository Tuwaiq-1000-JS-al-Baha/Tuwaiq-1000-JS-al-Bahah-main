const numbers = [4, 6, 12, 21]


// => [8, 12, 24, 42]

let numberMulti2 = []

for (let i = 0; i < numbers.length; i++) {
    numberMulti2.push(numbers[i] * 2)
}

console.log("numbers:", numbers)
const numbersRev = [...numbers]
console.log("numbersConcat:", numbersRev)

console.log("numberMulti2:", numberMulti2)

console.log("------")

const numbers2 = [4, 6, 12, 21]

for (let i = 0; i < numbers.length; i++) {
    console.log("inside for:", numbers[i])
}

numbers2.forEach(function (number) {
    console.log("inside for each:", number)
})

const fruits = ["banana", "apple", "mango"]

fruits.forEach(function (fruit) {
    console.log("inside for each:", fruit)
})


//  map create new array based on another array
const newFruits = fruits.map(function (fruit) {
    console.log("inside map:", fruit)
    return fruit + "!"
})
console.log("newFruits:", numberFruits)


const numbers3 = [4, 6, 12, 21, 3]

const numberMult2 = numbers3.map(function (number) {
    return number + ' years old'
})

console.log("numberMult2:", numberMult2)

const ages = [2, 42, 12]
const agesOld = ages.map(function (number) {
    return number + ' years old'
})

console.log("agesOld:", agesOld)