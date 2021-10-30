const button1 = document.querySelector(".btn1")

const button2 = document.querySelector(".btn2")
const output = document.querySelector(".output")

function addImage() {
    output.innerHTML = `<img src="https://media.istockphoto.com/photos/gorgeous-ginger-cat-on-isolated-black-background-picture-id1018078858?s=612x612"
                        width="200px">`
}


button1.addEventListener("click", function () {
    console.log("you have clicked")
})

button2.addEventListener("click", function () {
    output.innerHTML = `
    <h1>Hello</h1>
    <button class="btn1"></button>
    <button class="btn2">Click here 2</button>

    <div class="output">

    </div>
    `
})