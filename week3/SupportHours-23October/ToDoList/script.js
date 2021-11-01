const input = document.querySelector(".input")
const ul = document.querySelector(".list")


function addTask() {
    const text = input.value
    const item = `
    <div>
    <li onclick="crossTask(this)" class="item-li">${text}</li>
    <input type= "text" class="input-edit">
    <button onclick="removeTask(this)">Remove</button>
    <button onclick="editTask(this)" class="edit-btn">Edit</button>
    <button onclick="confirmEdit(this)" class="confirm-btn">Confirm</button>
    </div`
    ul.innerHTML += item
    input.value = ""
}

function crossTask(li){
    li.style.textDecoration = "line-through"
}

function removeTask(removeButton){
    const item = removeButton.parentElement
    item.remove()
}

function editTask(editButton){
    const item = editButton.parentElement
    const li = item.querySelector(".item-li")
    const editInput = item.querySelector(".input-edit")
    li.style.display="none"
    editInput.style.display = "inline"
    const text = li.innerHTML
    editInput.value = text 
    const confirmButton = item.querySelector(".confirm-btn")
    confirmButton.style.display="inline"
    editButton.style.display="none"
}

function confirmEdit(confirmButton){
const item = confirmButton.parentElement
const li = item.querySelector(".item-li")
const editInput = item.querySelector(".input-edit")
const text= editInput.value
li.innerHTML = text
li.style.display="inline"
editInput.style.display="none"
confirmButton.style.display="none"
const editButton = item.querySelector(".edit-btn")
editButton.style.display="inline"
}