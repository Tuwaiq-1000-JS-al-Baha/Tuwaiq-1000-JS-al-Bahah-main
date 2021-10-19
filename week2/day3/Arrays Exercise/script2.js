let a = 6

let b = a

console.log(a)
console.log(b)

b = 2

console.log('----')

console.log(a)
console.log(b)

console.log('----')

const fruits = ["banana", "apple", "orange"]
const vegetables = ["potato", "tomato"]

let favouriteFood = fruits.concat()
favouriteFood = [...fruits, ...vegetables, "chocolate"]

console.log("fruits:", fruits)
console.log("favourite food:", favouriteFood)
console.log('----')

// favouriteFood.push("chocolate")


console.log("fruits:", fruits)
console.log("favourite food:", favouriteFood)


const person = {
    name: "bob",
    age: 33,
    job: "baker"
}

const actor = {
    ...person,
    job: "actor",
    canDrive: true
}

// actor.job = "actor"


console.log("person:", person)
console.log("actor:", actor)