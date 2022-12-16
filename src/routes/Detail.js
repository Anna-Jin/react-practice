import {useCallback, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Movie from "../components/movie/Movie";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const { id } = useParams();
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);


  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Movie key={movie.id}
                 id={movie.id}
                 coverImg={movie.medium_cover_image}
                 title={movie.title}
                 year={movie.year}
                 genres={movie.genres}
                 desc={movie.description_full} />
        </div>
      )}
    </div>
  );
}

export default Detail;

