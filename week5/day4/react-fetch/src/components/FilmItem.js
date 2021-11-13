function FilmItem(props) {
  return (
    <div>
      <h3>{props.film.title}</h3>
      <img src={props.film.image} width="400px" />
      <p>{props.film.description}</p>
    </div>
  )
}

export default FilmItem
