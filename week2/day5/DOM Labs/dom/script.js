const h1 = document.querySelector("h1")

h1.style.color = "red"
h1.innerHTML += "goodbye"

let a = "hello"
console.log(a)
a += "!!!!"
console.log(a)

console.log(h1)
console.log(h1.innerHTML)

const div = document.querySelector(".first")

div.innerHTML += "<button class='mybtn'>become a cat</button>"

console.log(div)
console.log(div.innerHTML)


const firsth1 = document.querySelector(".first h1")

firsth1.innerHTML += "Second part"

console.log(firsth1)

const p = document.querySelector(".first p")
// p.remove()
console.log(p)
p.classList.add("myp")

// https://www.thesprucepets.com/thmb/kV_cfc9P4QWe-klxZ8y--awxvY4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg

const picture = document.querySelector(".picture")
picture.setAttribute("height", "100")
// picture.id = "123"
picture.src = "https://www.thesprucepets.com/thmb/kV_cfc9P4QWe-klxZ8y--awxvY4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg"
// picture.setAttribute("src", "https://www.thesprucepets.com/thmb/kV_cfc9P4QWe-klxZ8y--awxvY4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg")
console.log(picture)

const button = document.querySelector(".mybtn")

button.addEventListener("click", function () {
    // https://i.cbc.ca/1.5256404.1566499707!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/cat-behaviour.jpg
    picture.src = "https://i.cbc.ca/1.5256404.1566499707!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/cat-behaviour.jpg"
})