const picture = document.querySelector(".picture")

fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data)
        const src = data.message
        console.log(src)
        const image = `<img src="${src}" height="300px" >`
        picture.innerHTML = image
    })

// console.log("hello")