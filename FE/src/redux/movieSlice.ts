import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { MovieType } from '../components/Movies/MovieTypes';
import apiRequest from '../utils/apiRequest';

export const fetchMovies = createAsyncThunk(
  'get-movies',
  async () => await apiRequest('/movies', 'GET')
);

export const findMovies = (searchedMovie: string, movies: MovieType[]) => {
  return movies.filter((movie: MovieType) => (
    movie.title
      .toLocaleLowerCase()
      .includes(searchedMovie.toLocaleLowerCase())
  ));
};

type StateType = {
  movies: MovieType[],
  searchedMovieTitle: string,
  isLoading: boolean,
  error: string,
}

const initialState: StateType = {
  movies: [],
  searchedMovieTitle: '',
  isLoading: false,
  error: '',
}

const movieSlice = createSlice({
  name: 'movies',
  initialState: initialState,
  reducers: {
    updateSearchedMovie: (state, action) => {
      state.searchedMovieTitle = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.isLoading = false;
        state.error = '';
      })
      .addCase(fetchMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.movies = [];
        state.isLoading = false;
        state.error = action.error.message || 'An error happened during fetch.';
      })
  }
});

export const { updateSearchedMovie } = movieSlice.actions;
export default movieSlice;
