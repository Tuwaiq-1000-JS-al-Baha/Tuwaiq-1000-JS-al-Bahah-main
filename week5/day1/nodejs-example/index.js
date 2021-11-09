const axios = require("axios")

axios.get("https://ghibliapi.herokuapp.com/films")
    .then(response => {
        const films = response.data

        console.log(films[0])
    })


console.log("hello")
const a = 5
const b = 10

console.log(a - b)