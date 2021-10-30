const body = document.querySelector("body")
body.style.fontFamily = "Arial, sans-serif"
body.style.textAlign = "center"

const nickname = document.querySelector("#nickname")
const favorite = document.querySelector("#favorite")
const hometown = document.querySelector("#hometown")

nickname.innerHTML = "Ahmad"
favorite.innerHTML = "cat"
hometown.innerHTML = "Al baha"

const liList = document.querySelectorAll("li")

liList.forEach(function (li) {
    // li.className = "listitem"
    li.classList.add("listitem")
    li.style.color = "dodgerblue"
    li.style.listStyle = "none"
})

const image = `<img src="https://upload.wikimedia.org/wikipedia/en/5/5f/TomandJerryTitleCardc.jpg" width="300px">`

const profilePicture = document.querySelector(".profilePicture")
profilePicture.innerHTML = image

const books = [
    {
        title: "The Design of Everyday Things",
        author: "Don Norman",
        alreadyRead: false,
        image: "https://images-na.ssl-images-amazon.com/images/I/81zpLhP1gWL.jpg"
    },
    {
        title: "The Most Human Human",
        author: "Brian Christian",
        alreadyRead: true,
        image: "https://images1.penguinrandomhouse.com/cover/9780307476708"
    },
    {
        title: "In Search of Lost Time",
        author: "Marcel Proust",
        alreadyRead: true,
        image: "https://images-na.ssl-images-amazon.com/images/I/81zpLhP1gWL.jpg"
    },
    {
        title: "Ulysses",
        author: "James Joyce",
        alreadyRead: true,
        image: "https://images-na.ssl-images-amazon.com/images/I/81zpLhP1gWL.jpg"

    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        alreadyRead: true,
        image: "https://images-na.ssl-images-amazon.com/images/I/81zpLhP1gWL.jpg"
    }
]

const h1 = `<h1>My Book List</h1>`
const favoriteBooks = document.querySelector(".favoriteBooks")
favoriteBooks.innerHTML = h1

books.forEach(function (book) {
    let bookElement = `<img src="${book.image}" width="100px">`
    if (book.alreadyRead === true) {
        bookElement += `<p style="color: red">${book.title}, by ${book.author}</p>`
    } else {
        bookElement += `<p>${book.title}, by ${book.author}</p>`
    }
    favoriteBooks.innerHTML += bookElement
})
