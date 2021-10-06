
const person = {
    firstName: "Bob",
    lastName: "Marley",
    age: 99,
    job: "dancer",
    hunger: 99,
    dance: function (time) {
        console.log('dancing for ' + time + ' minutes........')
    },
    eat: function () {
        console.log('eating....')
        this.hunger -= 50
    }
}

for (let i = 0; person.age.books.length; i++) {
    console.log(person.age.books[i])
}

console.log(person)

const person2 = { ...person, firstName: "John", age: 24 }


console.log(person2)

