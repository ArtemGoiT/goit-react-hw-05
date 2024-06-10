import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from "./MovieCast.module.css";
import Loader from "../Loader/Loader";
import useTmdbkApi from "../../hook/useTmdbApi";

const MovieCast = () => {
  const { fetchCast } = useTmdbkApi();
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCast(movieId);
        setCast(data);
      } catch (error) {
        console.error("Error fetching movie cast:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchCast, movieId]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={css.imagesContainer}>
      <h3 className={css.header}>Cast</h3>
      {cast && cast.length > 0 ? (
        <ul className={css.castList}>
          {cast.slice(0, 10).map((actor) => (
            <li key={actor.id} className={css.castItem}>
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w92${actor.profile_path}`}
                  alt={actor.name}
                  className={css.img}
                />
              ) : (
                <div className={css.noImagePlaceholder}>No Image</div>
              )}
              <div className={css.actorDetails}>
                <h4 className={css.actorName}>{actor.name}</h4>
                <p className={css.characterName}>
                  Character: {actor.character}
                </p>
                <p className={css.actorPopularity}>
                  Popularity: {actor.popularity}
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <h4>
          Sorry, but there is no cast information available for this movie
        </h4>
      )}
    </div>
  );
};

export default MovieCast;
