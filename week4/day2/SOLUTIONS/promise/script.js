// synchronous

// console.log("hello")

// console.log(123)

// console.log("bye")

// asynchronous

// setTimeout(function () {
//     console.log("hello!")
// }, 3000)

// setInterval(function () {
//     console.log("hello?")
// }, 1000)

// const addPromise = new Promise((resolve, reject) => {
//     console.log("i am inside promise")
//     const a = 2
//     const b = 7
//     resolve("mohammad")
// })

// p1.then(function (result) {
//     console.log("result from then:", result)
// })

const addPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        const result = 2 + 7
        console.log("hello inside promise")

        resolve(result)
    }, 3000)
})

// console.log("add result:", add(2, 6))
console.log(4)


addPromise
    .then(result => {
        console.log("result of addPromise:", result)
    })
    .catch(error => {
        console.log("error:", error)
    })
console.log(5)

// axios.get("agnaega.com").then(response => {
//     console.log(response)

// })
