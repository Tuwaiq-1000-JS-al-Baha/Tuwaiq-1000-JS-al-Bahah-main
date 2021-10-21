const button = document.querySelector(".add-btn")
const input = document.querySelector(".input")
const list = document.querySelector(".list")

button.addEventListener("click", function () {
    const text = input.value

    const item = document.createElement("li")
    item.innerHTML = text

    item.addEventListener("click", function () {
        item.style.color = "green"
        item.style.textDecoration = "line-through"
    })

    list.append(item)

    input.value = ""
})