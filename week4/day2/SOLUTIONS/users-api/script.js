const usersDiv = document.querySelector(".users-list")
const selectedUser = document.querySelector(".selected-user")

axios.get("https://reqres.in/api/users")
    .then(response => {
        const data = response.data

        console.log(data)

        const users = data.data

        console.log(users)

        users.forEach(user => {
            const firstName = user.first_name
            const lastName = user.last_name
            const email = user.email
            const avatar = user.avatar

            const id = user.id

            console.log(id)

            const userElement = `
            <div id="${id}">
                <h3>${firstName} ${lastName}</h3>
                <p>${email}</p>
                <img src="${avatar}" onclick="getUser(${id})" >
            </div>
            `

            usersDiv.innerHTML += userElement
        });
    })


function getUser(id) {
    console.log("id:", id)
    axios.get(`https://reqres.in/api/users/${id}`)
        .then(response => {
            const data = response.data
            const user = data.data
            console.log("single user:", user)

            const firstName = user.first_name
            const lastName = user.last_name
            const email = user.email
            const avatar = user.avatar

            const userElement = `
            <div>
                <h4>${firstName} ${lastName}</h4>
                <img src="${avatar}" >
                <p>${email}</p>
            </div>
            `
            selectedUser.innerHTML = userElement

        })
}