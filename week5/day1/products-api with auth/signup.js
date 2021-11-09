const form = document.querySelector("form")

function signup(event) {
    event.preventDefault()

    const firstName = form.elements.first.value
    const lastName = form.elements.last.value
    const photo = form.elements.photo.value
    const email = form.elements.email.value
    const password = form.elements.password.value

    const body = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        photo: photo
    }


    axios.post("https://vast-chamber-06347.herokuapp.com/api/user", body)
        .then(response => {
            window.location.href = "login.html"
        })
}