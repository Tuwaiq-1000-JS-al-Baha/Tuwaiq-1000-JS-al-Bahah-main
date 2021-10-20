const numbers = [1, 2, 5, 7, -1, 8]

// غربلة
const numbersPositive = numbers.filter(number => {
    return number >= 5
})

console.log(numbersPositive)

const numbersEven = numbers.filter(number => {
    return number % 2 === 0
})

console.log(numbersEven)

console.log('----')

const numbers2 = [2, 20, 41, 6, 7, 100]

// primitive type search only
console.log(numbers2.includes(7))

const number7Exist = numbers2.find(number => {
    return number === 7
})

console.log(number7Exist)

const students = [
    {
        name: "ali",
        grade: 100
    }, {
        name: "ahmad",
        grade: 1
    }
]

// finds objects too
const samiExist = students.find(student => {
    return student.name === "sami"
})

console.log(samiExist)

if (samiExist) {
    console.log("sami exist!")
} else {
    console.log("sami doesn't exist")
}

const numbers3 = [2, 20, 41, 6, 7, 100]

// ascending sort
const numbersSortedAsc = numbers3.sort((a, b) => b - a)
// descending sort
const numbersSortedDesc = numbers3.sort((a, b) => a - b)

console.log(numbersSortedAsc)
console.log(numbersSortedDesc)

const names = ["samir", "tariq", "z", "ahmad"]

const sortedNames = names.sort()

console.log(sortedNames)

const numbersReuduce = numbers3.reduce((sum, val) => {
    return sum + val
}, 0)

console.log(numbersReuduce)