import { MovieType } from '../components/Movies/MovieTypes';
import apiRequest from './apiRequest';

export const getMovies = async () => {
  const response = await apiRequest('/movies', 'GET');
  return response;
};

export const findMovies = (searchedMovie: string, movies: MovieType[]) => {
  return movies.filter((movie: MovieType) => movie.title.toLocaleLowerCase().includes(searchedMovie.toLocaleLowerCase()));
}
