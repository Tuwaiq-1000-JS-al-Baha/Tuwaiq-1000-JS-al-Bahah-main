const button = document.querySelector(".add-btn")
const input = document.querySelector(".input")
const list = document.querySelector(".list")


button.addEventListener("click", function () {
    const text = input.value
    const item = "<li>" + text + "</li>"
    list.innerHTML += item
    input.value = ""

    const items = document.querySelectorAll(".list li")
    items.forEach(item => {
        item.addEventListener("click", function () {
            item.style.color = "green"
            item.style.textDecoration = "line-through"
        })
    })
})
