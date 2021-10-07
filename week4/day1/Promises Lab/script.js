console.log("begin")
const a = 7
const b = 11


// const interval = setInterval(function () {
//     console.log('inside set interval')
// }, 2000)

// setTimeout(function () {
//     console.log('inside set timeout')
//     clearInterval(interval)
// }, 5000)


const promise1 = new Promise(function (resolve, reject) {
    console.log("promise1 start")
    setTimeout(function () {
        const num1 = 1
        const num2 = 5
        const result = num1 + num2
        if (result >= 0) {
            resolve(result + 3)
        } else {
            reject("sorry")
        }
    }, 2000)
})

const promise2 = new Promise(function (resolve, reject) {
    console.log("promise2 start")

    setTimeout(function () {
        const num1 = 7
        const num2 = 20
        const result = num1 + num2
        if (result >= 0) {
            resolve(result + 3)
        } else {
            reject("sorry")
        }
    }, 1000)
})


Promise.all([promise1, promise2]).then(results => {
    console.log(results)
})



// promise1
//     .then(result => {
//         console.log("this is result in then", result)
//     })
//     .catch(error => console.log(error))

// promise2
//     .then(result => {
//         console.log("this is result in then2", result)
//     })
//     .catch(error => console.log(error))

console.log(a + b)

console.log("end")
