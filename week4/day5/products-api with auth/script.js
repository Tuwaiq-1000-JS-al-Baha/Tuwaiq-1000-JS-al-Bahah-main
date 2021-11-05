const productsDiv = document.querySelector(".products-list")
const formAdd = document.querySelector(".form-add")

getProducts()

function getProducts() {
    axios.get("https://vast-chamber-06347.herokuapp.com/api/products")
        .then(response => {
            const products = response.data

            const productsSorted = products.sort((productA, productB) => productB.dateCreated.localeCompare(productA.dateCreated))

            console.log("product sorted:", productsSorted)

            productsDiv.innerHTML = ""

            productsSorted.forEach(product => {
                const title = product.title
                const description = product.description
                const image = product.image
                const quantity = product.quantity
                const price = product.price
                const category = product.category

                const id = product._id

                const productElement = `
                <div class="product-item">
                    <div class="product-info">
                        <h2>Title: <span>${title}</span></h2>
                        <h4>Description: <span>${description}</span></h4>
                        <img src="${image}" width="200px" >
                        <p class="quantity-class">Quantity: <span>${quantity}</span></p>
                        <p class="category-class">Category: <span>${category}</span></p>
                        <b>Price: <span>${price}</span> SAR</b>
                        <button onclick="deleteProduct('${id}')">Delete product</button>
                        <button onclick="editProduct(this)" >Edit</button>
                    </div>
                    <form class="product-form">
                        <label>Title:</label><input type="text" name="title">
                        <br>
                        <label>Description:</label><input type="text" name="description">
                        <br>
                        <label>Quantity:</label><input type="number" name="quantity">
                        <br>
                        <label>Image:</label><input type="url" name="image">
                        <br>
                        <label>Category:</label>
                        <select name="category">
                            <option>food</option>
                            <option>drinks</option>
                            <option>clothes</option>
                            <option>tools</option>
                        </select>
                        <br>
                        <label>Price:</label><input type="number" name="price">
                        <br>
                        <button onclick="deleteProduct('${id}')">Delete product</button>
                        <button onclick="confirmEdit(event, this, '${id}')" >Confirm</button>
                    </form>
                </div>
                    `

                productsDiv.innerHTML += productElement
            })

        })

}

function confirmEdit(event, confirmButton, id) {
    event.preventDefault()

    const productForm = confirmButton.parentElement

    const title = productForm.elements.title.value
    const description = productForm.elements.description.value
    const quantity = productForm.elements.quantity.value
    const image = productForm.elements.image.value
    const category = productForm.elements.category.value
    const price = productForm.elements.price.value

    const productBody = {
        title: title,
        description: description,
        quantity: quantity,
        image: image,
        category: category,
        price: price
    }

    axios.put(`https://vast-chamber-06347.herokuapp.com/api/products/${id}`, productBody, {
        headers: {
            Authorization: localStorage.token
        }
    })
        .then(response => {
            getProducts()
        })

}

function editProduct(editButton) {

    const productForm = editButton.parentElement.nextElementSibling
    productForm.style.display = "inline"

    const productInfo = editButton.parentElement
    productInfo.style.display = "none"

    const title = productInfo.querySelector("h2 span").innerHTML
    const description = productInfo.querySelector("h4 span").innerHTML
    const quantity = productInfo.querySelector(".quantity-class span").innerHTML
    const category = productInfo.querySelector(".category-class span").innerHTML
    const price = productInfo.querySelector("b span").innerHTML
    const image = productInfo.querySelector("img").src


    const titleInput = productForm.elements.title
    const descriptionInput = productForm.elements.description
    const quantityInput = productForm.elements.quantity
    const imageInput = productForm.elements.image
    const categoryInput = productForm.elements.category
    const priceInput = productForm.elements.price


    titleInput.value = title
    descriptionInput.value = description
    quantityInput.value = quantity
    categoryInput.value = category
    priceInput.value = price
    imageInput.value = image
}


function deleteProduct(id) {
    console.log(id)
    axios.delete(`https://vast-chamber-06347.herokuapp.com/api/products/${id}`, {
        headers: {
            Authorization: localStorage.token
        }
    })
        .then(response => {
            getProducts()
        })
}

function addProduct(event) {
    event.preventDefault()

    const title = formAdd.elements.title.value
    const description = formAdd.elements.description.value
    const quantity = formAdd.elements.quantity.value
    const image = formAdd.elements.image.value
    const category = formAdd.elements.category.value
    const price = formAdd.elements.price.value

    const productBody = {
        title: title,
        description: description,
        quantity: quantity,
        image: image,
        category: category,
        price: price
    }

    axios.post("https://vast-chamber-06347.herokuapp.com/api/products", productBody, {
        headers: {
            Authorization: localStorage.token
        }
    })
        .then(response => {
            const data = response.data

            console.log(data)

            getProducts()
        })
}
