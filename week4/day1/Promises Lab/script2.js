console.log("begin")

fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => {
        console.log("finished:", data)

    })
    .catch(err => {
        console.log("error:", err)
    })





console.log(9 + 1)

console.log("end")