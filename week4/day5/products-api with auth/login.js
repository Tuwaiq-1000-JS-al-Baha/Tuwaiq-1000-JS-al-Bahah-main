const form = document.querySelector("form")

function login(event) {
    event.preventDefault()

    const email = form.elements.email.value
    const password = form.elements.password.value

    const body = {
        email: email,
        password: password
    }

    axios.post("https://vast-chamber-06347.herokuapp.com/api/user/auth", body)
        .then(response => {
            const token = response.data

            localStorage.token = token

            window.location.href = "index.html"
        })
}