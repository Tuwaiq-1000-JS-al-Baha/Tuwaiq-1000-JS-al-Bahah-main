function signUp(event) {
    event.preventDefault()

    const form = document.querySelector("form")

    const userBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        photo: form.elements.photo.value
    }

    axios.post("https://vast-chamber-06347.herokuapp.com/api/user", userBody)
        .then(response => {
            console.log("signup success")

            window.location.href = "login.html"
        })
}


function logout() {
    localStorage.removeItem("token")
}