const addBtnList = document.querySelectorAll(".add-btn")
const selectedElement = document.querySelector(".selectedElement")

addBtnList.forEach(function (addBtn) {
    addBtn.addEventListener("click", function () {
        // get information from element
        const element = addBtn.parentElement
        const title = element.querySelector("h3").innerHTML
        const description = element.querySelector("p").innerHTML
        const image = element.querySelector("img").src
        console.log(title)
        console.log(description)
        console.log(image)
        // create the new element
        const newElement = `
        <div class="newElement">
            <h2>${title}</h2>
            <img src="${image}" height="100px">
            <p>${description}</p>
        </div>
        `
        // add the new element to the correct place
        selectedElement.innerHTML += newElement
        element.remove()
    })
})

