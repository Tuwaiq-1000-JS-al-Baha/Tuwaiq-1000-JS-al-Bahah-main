const picture = document.querySelector(".picture")

axios.get("https://dog.ceo/api/breeds/image/random")
    .then(function (response) {

        const data = response.data
        const src = data.message
        const image = `<img src="${src}" height="300px" >`
        picture.innerHTML = image
    })