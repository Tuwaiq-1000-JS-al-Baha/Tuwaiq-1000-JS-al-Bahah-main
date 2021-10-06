// const friends = ["bob", "john", "alice"]

// // for (let i = 0; i < friends.length; i++) {
// //     console.log("hi " + friends[i])
// // }


// // friends.forEach((friend) => {
// //     console.log("hi " + friend)
// //     if (friend === "bob")
// //         console.log('you are my best friend')
// // })

// // largestEvenNumber([1,2,3,10,4,7,11,0]) => 10

// //const numbers = [1, 2, 3, 10, 4, 7, 11, 0]
// // let largestEvenNumber = 0

// // numbers.forEach(number => {
// //     if (number % 2 === 0 && number > largestEvenNumber)
// //         largestEvenNumber = number
// // })

// // console.log(largestEvenNumber)

// // const evenNumbers = numbers.filter(number => {
// //     if (number % 2 === 0)
// //         return true
// //     else
// //         return false
// // })
// // console.log(numbers)
// // console.log(evenNumbers)

// //wordsWithA(['cat', 'rabbit', 'dog', 'frog']) // should return ['cat', 'rabbit']

// // const words = ['cat', 'rabbit', 'dog', 'frog']

// // const wordsWithA = words.filter(function (word) {
// //     return word.includes("a")
// // })



// // console.log(words)
// // console.log(wordsWithA)

// const numbers = [1, 2, 3, 10, 4, 7, 11, 0]


// const array = friends.map(friend => {
//     if (friend === "john")
//         return "the best"
//     else
//         return friend
// })



// // console.log(friends)
// // console.log(array)

// const evenNumbers = numbers.filter(number => number > 5)
// const evenNumber = numbers.some(number => number % 2 === 0)

// // console.log(friends)
// const friendHasA = friends.every(friend => typeof friend === "string")

// //console.log(evenNumber)
// // console.log(numbers)
// // console.log(evenNumbers)
// // console.log(evenNumber)

// const total = numbers.reduce((sum, number) => sum + number, 0)

// console.log(total)

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
]

const inventors1500 = inventors.filter(inventor => inventor.year > 1500 && inventor.year < 1600)

console.log(inventors1500)

