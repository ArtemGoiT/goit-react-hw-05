import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from "./MovieCast.module.css";
import Loader from "../Loader/Loader";
import useTmdbkApi from "../../hook/useTmdbApi";

const MovieCast = () => {
  const { fetchCast } = useTmdbkApi();
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedActor, setSelectedActor] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCast(movieId);
        setCast(data.cast); // Установка данных об актерах в состояние
      } catch (error) {
        console.error("Error fetching movie cast:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchCast, movieId]);

  const handleActorClick = (actor) => {
    setSelectedActor(actor);
  };

  const handleCloseModal = () => {
    setSelectedActor(null);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={css.container}>
      <h3 className={css.header}>Cast</h3>
      {selectedActor && (
        <div className={css.modal} onClick={handleCloseModal}>
          <div className={css.modalContent}>
            <span className={css.closeBtn} onClick={handleCloseModal}>
              &times;
            </span>
            <img
              src={`https://image.tmdb.org/t/p/w300${selectedActor.profile_path}`}
              alt={selectedActor.name}
              className={css.modalImage}
            />
          </div>
        </div>
      )}
      <ul className={css.castList}>
        {cast.map((actor) => (
          <li
            key={actor.id}
            className={css.castItem}
            onClick={() => handleActorClick(actor)}
          >
            <div className={css.actorInfo}>
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
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
