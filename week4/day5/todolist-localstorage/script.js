const list = document.querySelector(".list")
const input = document.querySelector(".input")

let textArray

getTasks()
const taskList = document.querySelectorAll(".list p")

function getTasks() {
    if (localStorage.textArray === undefined) {
        textArray = []
    } else {
        textArray = JSON.parse(localStorage.textArray)
    }

    list.innerHTML = ""

    textArray.forEach((element, index) => {
        console.log("index in foreach:", index)
        const taskElement = `<p>${element} <button onclick="removeTask(${index})">Remove</button></p>`

        list.innerHTML += taskElement

    })
}

function addTask() {
    const text = input.value

    const index = textArray.length
    console.log(index)

    textArray.push(text)

    localStorage.textArray = JSON.stringify(textArray)


    const taskElement = `<p>${text} <button onclick="removeTask(${index})">Remove</button></p>`

    list.innerHTML += taskElement

    input.value = ""
}

function removeTask(index) {
    textArray.splice(index, 1)
    localStorage.textArray = JSON.stringify(textArray)
    getTasks()
}
