// const person = ["Ahmad", "AlGhamdi", 24, "actor", 12345]

// console.log(person[0], person[1], "you are", person[2], "years old")


const person = {
    firstName: "Ahmad",
    lastName: "AlGhamdi",
    age: 25,
    job: "actor",
    id: 12345,
    canDrive: false,
    grades: [2, 2, 1, 1],
    animal: {
        name: "bob",
        type: "cat",
        age: 25,
        favouriteFoods: ["tuna", "chicken"]
    }
}

const students = [
    { name: "ahmad", grade: 20 },
    { name: "ahmadd", grade: 100 },
    { name: "ahmaddd", grade: 90 }
]

for (let i = 0; i < students.length; i++) {
    console.log("hello " + students[i].name + " you have " + students[i].grade)
}

// console.log(person.firstName + " " + person.lastName + " you are " + person.age + " years old")
// console.log("you are an " + person.job + " your id is " + person.id)
// console.log(person.grades[0])
// console.log(person.animal)
// console.log(person.animal.favouriteFoods[1])