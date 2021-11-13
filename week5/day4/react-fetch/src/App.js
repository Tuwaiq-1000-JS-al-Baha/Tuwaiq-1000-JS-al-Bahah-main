import axios from "axios"
import { useEffect, useState } from "react"
import FilmGroup from "./components/FilmGroup"

function App() {
  const [films, setFilms] = useState([])

  useEffect(() => {
    axios.get("https://ghibliapi.herokuapp.com/films").then(response => {
      setFilms(response.data)
    })
  }, [])

  console.log(films)
  return (
    <>
      <FilmGroup films={films} />
    </>
  )
}

export default App
