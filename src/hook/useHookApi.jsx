import { useState, useCallback } from "react";
import MoveApi from "../api/api";

let tmdbApiInstance = null;

const useHookApi = () => {
  tmdbApiInstance ??= new MoveApi();
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchTrendingMovies = useCallback(async (setData) => {
    try {
      const data = await tmdbApiInstance.fetchMovies();
      setData(data);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(error.message);
    }
  }, []);

  const fetchMovieById = useCallback(async (id) => {
    try {
      const data = await tmdbApiInstance.fetchMovieById(id);
      return data;
    } catch (error) {
      setErrorMessage(error.message);
      throw error;
    }
  }, []);

  const fetchCast = useCallback(async (id) => {
    try {
      const data = await tmdbApiInstance.fetchCast(id);
      return data;
    } catch (error) {
      setErrorMessage(error.message);
    }
  }, []);

  const fetchReviews = useCallback(async (id) => {
    try {
      const data = await tmdbApiInstance.fetchReviews(id);
      return data;
    } catch (error) {
      setErrorMessage(error.message);
    }
  }, []);

  const fetchMovieByQuery = useCallback(async (query) => {
    try {
      const data = await tmdbApiInstance.fetchMovieByQuery(query);
      setErrorMessage(null);
      return data;
    } catch (error) {
      setErrorMessage(error.message);
      throw error;
    }
  }, []);

  return {
    fetchTrendingMovies,
    fetchMovieById,
    fetchCast,
    fetchReviews,
    fetchMovieByQuery,
    errorMessage,
  };
};

export default useHookApi;
