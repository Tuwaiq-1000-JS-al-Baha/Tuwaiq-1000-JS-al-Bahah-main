const addBtnList = document.querySelectorAll(".add-btn")
const cart = document.querySelector(".cart-items")
const total = document.querySelector(".total")


addBtnList.forEach(addBtn => {
    addBtn.addEventListener("click", function () {
        // get information from element
        const cardBody = addBtn.parentElement
        const title = cardBody.querySelector(".card-title").innerHTML
        const price = cardBody.querySelector(".card-subtitle span").innerHTML
        console.log(title)
        console.log(price)
        const image = cardBody.previousElementSibling.src
        console.log(image)
        // create new element
        const cartItem = `
        <div class="cart-item d-flex justify-content-between align-items-center">
            <img class="img-thumbnail" style="height: 100px;" src="${image}" alt="">
            <span>${title}</span>
            <span>Price: ${price}  SAR</span>
        </div>`

        // add new element to correct place
        cart.innerHTML += cartItem

        // calculate the total
        const totalSpan = document.querySelector(".total span")
        totalSpan.innerHTML = Number(totalSpan.innerHTML) + Number(price)

    })
})
