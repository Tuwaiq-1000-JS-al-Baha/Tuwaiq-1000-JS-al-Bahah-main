const listUsers = document.querySelector(".list-users")

axios.get("https://reqres.in/api/users").then(response => {
  console.log(response.data.data)
})

fetch("https://reqres.in/api/users")
  .then(response => response.json())
  .then(data => {
    console.log(data.data)
  })

async function getUsers() {
  try {
    const response = await axios.get("https://reqres.in/api/users")
    const users = response.data.data
    //   console.log(users)

    users.forEach(user => {
      const userElement = `
        <div>
            <img src="${user.avatar}" >
            <h2>${user.first_name} ${user.last_name}</h2>
            <p>${user.email}</p>
        </div>
    `
      listUsers.innerHTML += userElement
    })
  } catch (error) {}
}

getUsers()
