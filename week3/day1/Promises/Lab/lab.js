// Two ways of using fetch

// the promise then way
fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => {
        if (response.ok)
            return response.json()
        else
            reject(response.status)
    })
    .then(data => console.log(data))
    .catch(err => console.log(err))

// the async / await way
async function newFetch() {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search')
        if (!response.ok)
            throw new Error(response.status)
        const data = await response.json()
        console.log(data)
    } catch (err) {
        console.log(err.message)
    }
}

// don't forget to call the async function
newFetch()



// we declare 3 promises p1, p2 and p3
const p1 = new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve("p1")
        }, 2000)
    })

const p2 = Promise.resolve(42)


const p3 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve("p3")
    }, 1000)
})


p1.then(res => console.log(res))

p2.then(res => console.log(res))

p3.then(res => console.log(res))


// Promise all waits for all promises before moving to then
// results contain an array of all resolved values in an array
Promise.all([p1, p2, p3]).then(results => {
    console.log(results)
})

// Promise race waits for the first promise that resolves and don't wait for the rest
// res contains the resolved value from the resolved promise
Promise.race([p1, p2, p3]).then(res => console.log(res))