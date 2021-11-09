addpost += `<h3>Comments</h3>`

comments.forEach(comment => {
    addpost += `
    <div>
    <strong>${comment.owner}</strong>
        <p>${comment.commment}</p>
    </div>
    `
})