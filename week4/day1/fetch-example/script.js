console.log("begin")

// get list of breeds
fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => {
        return res.json()
    })
    .then(data => {
        console.log(data)
        const breedList = Object.keys(data.message)
        const select = document.querySelector("#breed-select")

        breedList.forEach(function (breed) {
            const option = `<option value="${breed}">${breed}</option>`
            select.innerHTML += option
            // second way to create option
            // const option = document.createElement("option")
            // option.value = breed
            // option.innerHTML = breed
            // select.append(option)
        })
    })

// get a random image
fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
        console.log(data.message)
        document.querySelector("#random-dog").src = data.message

    })

/* fetch("https://reqres.in/api/users")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data.data[2].first_name)

    }) */
