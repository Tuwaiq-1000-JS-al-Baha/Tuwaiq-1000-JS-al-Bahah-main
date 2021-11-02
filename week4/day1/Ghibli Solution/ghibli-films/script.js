const filmsList = document.querySelector(".films-list")

axios.get("https://ghibliapi.herokuapp.com/films")
    .then(function (response) {
        const films = response.data


        films.forEach(function (film) {
            const title = film.title
            const image = film.image
            const releaseDate = film.release_date

            const filmItem = `
            <div>
                <h3>${title}</h3>
                <img src="${image}" height="200px">
                <b>${releaseDate}</b>
            </div>
            `

            filmsList.innerHTML += filmItem
        })

    })