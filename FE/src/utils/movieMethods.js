import apiRequest from './apiRequest';

export const getMovies = async () => {
  const response = await apiRequest('/movies', 'GET');
  return response.movies;
};
