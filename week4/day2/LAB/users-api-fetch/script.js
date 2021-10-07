
function renderUsers() {
    // GET : get users
    fetch('https://reqres.in/api/users')
        .then(response => {
            // we get response without the body yet
            // we check if it was a success
            if (response.status === 200) {
                return response.json()
            } else {
                throw new Error(response.statusText)
            }
        })
        .then(data => {
            // Our JSON data is here
            // users array is inside the property data
            const users = data.data
            let html = ""
            console.log(users)
            users.forEach(user => {
                let htmlSegment = `<div class="user">
                                    <img width="100" src="${user.avatar}" >
                                    <h3>${user.first_name} ${user.last_name}</h3>
                                    <p>${user.email}</p>
                                </div>`;
                html += htmlSegment
            });
            const container = document.querySelector("#container")
            container.innerHTML = html
        })
        .catch((error) => {
            console.error('Error:', error.message);
        })
}


// calling the renderUsers function to load the page
renderUsers()

document.querySelector("form").addEventListener("submit", e => {
    // never forget e.preventDefault() in button click on form
    e.preventDefault()

    // getting the form inputs (including the submit button)
    const elements = e.target.elements
    console.log(elements)
    // i get the title and body values from the inputs (they are ordered)
    const firstName = elements.firstName.value
    const lastName = elements.lastName.value
    const email = elements.email.value
    let imageUrl = elements.imageUrl.value
    // we specify an image url by default
    if (!imageUrl)
        imageUrl = "https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png"

    // we create the new post based on the collected input
    // this is the user we want to add
    // we map the property names as they should be
    const newUser = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        avatar: imageUrl
    }
    console.log(newUser)
    createUser(newUser)
})

function createUser(newUser) {
    // POST : create a user

    // this is a fake api so it won't really add it to the list
    // but responds OK
    fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
    })
        .then(response => {
            // here we confirm if the request went well (201 : created)
            if (response.status === 201) {
                return response.json()
            } else {
                throw new Error(response.statusText)
            }
        })
        .then(data => {
            // this data is the created user
            console.log('Created User:', data)

            // normally we would call renderUsers() again to refresh the users list
            // but since it's a fake API we will append the user manually to the page
            appendUser(data)
        })
        .catch(error => {
            console.log('Error:', error.message);
        })
}

function appendUser(user) {
    const container = document.querySelector("#container")

    container.innerHTML += `<div class="user">
                                <img width="100" src="${user.avatar}" >
                                <h3>${user.first_name} ${user.last_name}</h3>
                                <p>${user.email}</p>
                            </div>`
}