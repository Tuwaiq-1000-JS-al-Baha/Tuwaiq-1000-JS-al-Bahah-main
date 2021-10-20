const friends = ["Melissa", "Marc", "Andrew", "Nick"]

friends.forEach(function (friend) {
    console.log("I have a friend named " + friend.toLowerCase())
})


// sayHello("ali")

// function add(n1, n2) {
//     return n1 + n2
// }

// calculator(1, 2, add)

// calculator(1, 2, (n1, n2) => n1 + n2)

// calculator(1, 2, (n1, n2) => n1 - n2)
// calculator(1, 2, (n1, n2) => n1 * n2)
// calculator(1, 2, (n1, n2) => n1 / n2)

console.log('----')

const numbers = [1, 3, 5, 7]

const numberSquared = numbers.map(number => number ** 2)
console.log(numberSquared)

const instructors = ["Alex", "Daniel", "Morgan", "Ben", "Micah", "Jims"];

const instructorsMapped = instructors.map(instructor => instructor + " is awesome!!!")

console.log(instructorsMapped)