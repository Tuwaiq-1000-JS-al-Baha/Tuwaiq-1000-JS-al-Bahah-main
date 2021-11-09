const postsList = document.querySelector(".posts-list")
const addForm = document.querySelector(".add-form")
const errorElement = document.querySelector(".error-element")

let posts = []

getPosts()

function getPosts() {
    axios.get("https://vast-chamber-06347.herokuapp.com/api/posts")
        .then(response => {
            posts = response.data

            const postsSorted = posts.sort((postA, postB) => postB.dateCreated.localeCompare(postA.dateCreated))

            postsList.innerHTML = ""


            postsSorted.forEach(post => {

                let postElement = `
                <div class="post-item">
                    <div class="post-info-${post._id}">
               
                        <h3>Title: ${post.title}</h3>
                        <img src="${post.image}" width="200px">
                        <p>Body: ${post.body}</p>
                        <button onclick="editPost('${post._id}')">Edit</button>
                        <button onclick="deletePost('${post._id}')">Delete</button>
                    </div>
                    <form class="edit-form edit-form-${post._id}">
                        <label>Title:</label>
                        <input type="text" name="title">
                        <br>
                        <label>Body:</label>
                        <textarea name="body" cols="30" rows="3"></textarea>
                        <br>
                        <label>Image:</label>
                        <input type="url" name="image">
                        <br>
                        <p class="error-element"></p>
                        <button onclick="confirmEdit(event, '${post._id}')">Confirm</button>
                    </form>
                    <h3>Comments:</h3>
            `

                post.comments.forEach(comment => {
                    postElement += `
                    <div class="comment-item">
                        <div class="comment-info-${comment._id}">
                
                            <p>Comment: ${comment.comment}</p>
                            <button onclick="deleteComment('${post._id}', '${comment._id}')">Delete comment</button>
                            <button onclick="editComment('${post._id}', '${comment._id}')" >Edit comment</button>
                    
                        </div>
                        <form class="edit-form-comment edit-form-comment-${comment._id}" onsubmit="confirmEditComment(event, '${post._id}', '${comment._id}')">
                            <label>Comment:</label>
                            <textarea name="comment" cols="30" rows="1"></textarea>
                            <br>
                            <button>Confirm</button>
                        </form>
                    </div>
                    `
                })

                postElement += `
                <form class="form-comment-${post._id}" onsubmit="addComment(event, '${post._id}')">
                    <label>Comment:</label>
                    <textarea name="comment" cols="30" rows="1"></textarea>
                    <br>
                    <button>Add comment</button>
                </form>
                
                </div>
                `

                postsList.innerHTML += postElement
            })
        })
        .catch(error => {
            const errorMessage = error.response.data
            console.log(errorMessage)
        })
}

function addPost(event) {
    event.preventDefault()

    const postBody = {
        title: addForm.elements.title.value,
        body: addForm.elements.body.value,
        image: addForm.elements.image.value
    }

    axios.post("https://vast-chamber-06347.herokuapp.com/api/posts", postBody, {
        headers: {
            Authorization: localStorage.token
        }
    })
        .then(response => {
            console.log("added post")

            errorElement.innerHTML = ""
            addForm.reset()

            getPosts()
        })
        .catch(error => {
            const errorMessage = error.response.data
            console.log(errorMessage)
            errorElement.innerHTML = errorMessage
        })
}

function editPost(id) {
    const formEdit = document.querySelector(`.edit-form-${id}`)

    console.log(posts)
    const postFound = posts.find(post => post._id === id)

    console.log(postFound)

    formEdit.elements.title.value = postFound.title
    formEdit.elements.body.value = postFound.body
    formEdit.elements.image.value = postFound.image


    formEdit.style.display = "inline"


    const postInfo = document.querySelector(`.post-info-${id}`)
    postInfo.style.display = "none"

}

function confirmEdit(event, id) {
    event.preventDefault()

    const formEdit = document.querySelector(`.edit-form-${id}`)

    const postBody = {
        title: formEdit.elements.title.value,
        body: formEdit.elements.body.value,
        image: formEdit.elements.image.value,
    }

    console.log(postBody)

    axios.put(`https://vast-chamber-06347.herokuapp.com/api/posts/${id}`, postBody, {
        headers: {
            Authorization: localStorage.token
        }
    })
        .then(response => {
            console.log("edit success")
            getPosts()
        })
        .catch(error => {
            console.log(error.response.data)
        })
}

function deletePost(id) {
    axios.delete(`https://vast-chamber-06347.herokuapp.com/api/posts/${id}`, {
        headers: {
            Authorization: localStorage.token
        }
    })
        .then(response => {
            console.log("delete success")
            getPosts()
        })
        .catch(error => {
            console.log(error.response.data)
        })
}

function addComment(event, id) {
    event.preventDefault()

    const formComment = document.querySelector(`.form-comment-${id}`)

    const commentBody = {
        comment: formComment.elements.comment.value,
    }

    axios.post(`https://vast-chamber-06347.herokuapp.com/api/posts/${id}/comment`, commentBody, {
        headers: {
            Authorization: localStorage.token
        }
    })
        .then(response => {
            console.log("added comment")
            getPosts()
        })
        .catch(error => {
            console.log(error.response.data)
        })

}

function deleteComment(postId, commentId) {
    axios.delete(`https://vast-chamber-06347.herokuapp.com/api/posts/${postId}/comment/${commentId}`, {
        headers: {
            Authorization: localStorage.token
        }
    })
        .then(response => {
            console.log("comment deleted")
            getPosts()
        })
        .catch(error => {
            console.log(error.response.data)
        })
}

function editComment(postId, commentId) {
    const commentInfo = document.querySelector(`.comment-info-${commentId}`)
    commentInfo.style.display = "none"

    const editFormComment = document.querySelector(`.edit-form-comment-${commentId}`)

    const postFound = posts.find(post => post._id === postId)

    const commentFound = postFound.comments.find(comment => comment._id === commentId)

    editFormComment.elements.comment.value = commentFound.comment

    editFormComment.style.display = "inline"
}

function confirmEditComment(event, postId, commentId) {
    event.preventDefault()

    const editFormComment = document.querySelector(`.edit-form-comment-${commentId}`)

    const commentBody = {
        comment: editFormComment.elements.comment.value,
    }

    axios.put(`https://vast-chamber-06347.herokuapp.com/api/posts/${postId}/comment/${commentId}`, commentBody, {
        headers: {
            Authorization: localStorage.token
        }
    })
        .then(response => {
            console.log("comment edited")
            getPosts()
        })
        .catch(error => {
            console.log(error.response.data)
        })
}

function logout() {
    localStorage.removeItem("token")
}