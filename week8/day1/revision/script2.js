// let age = 61

// if (age >= 60) {
//   console.log("you are old")
// } else if (age >= 30 && age < 60) {
//   console.log("you are adult")
// } else {
//   console.log("you are young")
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(i)
// }

// for (let i = 10; i >= 1; i--) {
//   console.log(i)
// }

const fruits = ["apple", "orange", "mango", "pineapple", "peach"]

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] !== "mango") {
    console.log(fruits[i])
  }
}

fruits.forEach(fruit => {
  if (fruit !== "mango") {
    console.log(fruit)
  }
})

const fruitsNoMango = fruits.filter(fruit => fruit !== "mango")

console.log(fruitsNoMango)

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i])
// }

// const newFruits = fruits.filter(fruit => {
//   console.log()
//   return fruit.includes("c")
// })

// fruits.forEach(fruit => {
//   console.log(fruit)
// })

// |__| |__| |__| |__| |__| |__|
// 0  1 1  2 2  3
// console.log(newFruits)

// console.log(fruits.slice(1, 3))

// const newFruits = fruits.filter(fruit => fruit !== "mango")
// console.log(newFruits)
// console.log(fruits)

const name = "Mohammad"

// console.log(name.slice(0, 3))
// console.log(name.includes("moh"))

// console.log(fruits.includes("banana"))

const films = [
  {
    title: "Mission impossible",
    releaseYear: 2000,
  },
  {
    title: "Harry Potter",
    releaseYear: 2001,
  },
]

const person = {
  firstName: "Bob",
  age: 11,
  hobbies: ["dancing", "swimming"],
}

// console.log(films.find(film => film.title === "Harry Potter"))

// const hobbyFound = person.hobbies.includes("sleeping")

// console.log(hobbyFound)

const books = [
  {
    title: "Magic Spider",
    releaseYear: 2009,
    numberOfCopies: 100,
  },
  {
    title: "Sleeping Cat",
    releaseYear: 2020,
    numberOfCopies: 20,
  },
  {
    title: "Dancing Dog",
    releaseYear: 1999,
    numberOfCopies: 220,
  },
  {
    title: "Orange Mouse",
    releaseYear: 2021,
    numberOfCopies: 10000,
  },
]

// const booksCopies100 = books.filter(book => book.numberOfCopies > 100)

// console.log(booksCopies100)

// const booksYear2000 = books.filter(book => book.releaseYear < 2000)
// console.log(booksYear2000)

// const bookContainCat = books.find(book => book.title === "Orange Mouse")
// console.log(bookContainCat)
