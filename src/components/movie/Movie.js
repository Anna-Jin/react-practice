function Movie({ coverImg, title, year, url, genres, desc }) {
  return <div>
    <img src={coverImg} alt={title} />
    <h2>
      <a href={url} target="_blank">{title} ({year})</a>
    </h2>
    <strong>{genres.map((g, index) => <span key={g}>{g} {(genres.length - 1) !== index ? " / " : ""} </span>)}</strong>
    <p>{desc}</p>
  </div>;
}

export default Movie;