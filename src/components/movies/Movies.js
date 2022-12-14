import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movies.module.css";

function Movies({ id, coverImg, title, summary, genres, year }) {
  return <div className={styles.movies}>
    <img src={coverImg} alt={title} className={styles.movies__img} />
    <div>
      <h2 className={styles.movies__title}>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <h3 className={styles.movies__year}>{year}</h3>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      <ul className={styles.movies__genres}>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  </div>;
}

Movies.prototype = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movies;