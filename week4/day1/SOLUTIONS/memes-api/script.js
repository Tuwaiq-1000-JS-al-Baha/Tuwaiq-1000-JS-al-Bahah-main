const memesList = document.querySelector(".memes-list")
const input = document.querySelector(".search-input")
const memesFoundDiv = document.querySelector(".memes-found")
let memes = []

axios.get("https://api.imgflip.com/get_memes")
    .then(function (response) {
        const responseData = response.data

        console.log("responseData:", responseData)

        memes = responseData.data.memes

        console.log("memes:", memes)

        memes.forEach(function (meme) {
            const url = meme.url
            const width = meme.width / 5
            const height = meme.height / 5
            const name = meme.name

            const memeItem = `
            <div class="meme-item">
                <h3 onclick="toggleMeme(this)" >${name}</h3>
                <img src="${url}" height="${height}" width="${width}">
            </div>`
            memesList.innerHTML += memeItem
        })
    })

function toggleMeme(h3) {
    const image = h3.nextElementSibling
    // console.log(getComputedStyle(image).display)

    if (getComputedStyle(image).display == "inline") {
        image.style.display = "none"
    } else if (getComputedStyle(image).display == "none") {
        image.style.display = "inline"
    }
}

function searchMeme() {

    // const memeFound = memes.find(function (meme) {
    //     return input.value === meme.name
    // })

    const memeFound = memes.find(meme => meme.name.toLowerCase().includes(input.value.toLowerCase()))

    console.log(memeFound)
    const url = memeFound.url
    const width = memeFound.width / 5
    const height = memeFound.height / 5
    const name = memeFound.name

    const memeItem = `
            <div class="meme-item">
                <h3 onclick="toggleMeme(this)" >${name}</h3>
                <img src="${url}" height="${height}" width="${width}">
            </div>`

    console.log(memeItem)

    memesFoundDiv.innerHTML = memeItem
}