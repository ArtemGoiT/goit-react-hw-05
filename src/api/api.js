import axios from "axios";
import toast from "react-hot-toast";

class MoveApi {
  constructor() {
    this.MoveApi = axios.create({
      baseURL: "https://api.themoviedb.org/3",
      params: {
        api_key: import.meta.env.VITE_REACT_APP_TMDB_KEY,
      },
    });
  }

  async fetchMoviess() {
    try {
      const response = await this.MoveApi.get("/trending/movie/day");
      return response.data.results;
    } catch (error) {
      toast.error("Error fetching trending movies: ", error);
      throw error;
    }
  }

  async fetchMovieId(id) {
    try {
      const response = await this.MoveApi.get(`/movie/${id}`);
      return response.data;
    } catch (error) {
      toast.error(`Error fetching movie with ID ${id}: `, error);
      throw error;
    }
  }
  async fetchCast(id) {
    try {
      const response = await this.MoveApi.get(`/movies/${id}/credits`);
      return response.data;
    } catch (error) {
      toast.error(`Error fetching movie with ID ${id}: `, error);
      throw error;
    }
  }

  async fetchReviews(id) {
    try {
      const response = await this.MoveApi.get(`/movies/${id}/reviews`);
      return response.data;
    } catch (error) {
      toast.error(`Error fetching movie with ID ${id}: `, error);
      throw error;
    }
  }
  async fetchMovieQuery(query) {
    try {
      const response = await this.Moveapi.get("/search/movie", {
        params: { query },
      });
      const results = response.data.results;
      if (results.length === 0)
        throw new Error(`No results found for query "${query}"`);
      return results;
    } catch (error) {
      toast.error(`Error searching movies with query "${query}"`, error);
      throw error;
    }
  }
}
export default MoveApi;
