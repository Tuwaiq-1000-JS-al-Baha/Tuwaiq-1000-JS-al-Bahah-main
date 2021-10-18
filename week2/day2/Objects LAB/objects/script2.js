const books = [
    {
        title: "Blue book",
        author: "John",
        alreadyRead: false
    },
    {
        title: "Red book",
        author: "Mike",
        alreadyRead: true
    },
    {
        title: "Green book",
        author: "Sara",
        alreadyRead: true
    }
]

for (let i = 0; i < books.length; i++) {
    console.log(books[i].title + " by " + books[i].author)
    if (books[i].alreadyRead === true) {
        console.log("You already read " + books[i].title + " by " + books[i].author)
    } else {
        console.log("You still need to read " + books[i].title + " by " + books[i].author)
    }

}
