import FilmItem from "./FilmItem"

function FilmGroup(props) {
  return props.films.map(film => <FilmItem film={film} />)
}

export default FilmGroup
