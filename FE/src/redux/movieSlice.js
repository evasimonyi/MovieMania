import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiRequest from '../utils/apiRequest';

export const fetchMovies = createAsyncThunk(
  'get-movies',
  async (apiURL) => {
    const response = await apiRequest('/movies', 'GET');
    return response;
  }
);

const initialState = {
  movies: [],
  isLoading: false,
  error: null,
}

const movieSlice = createSlice({
  name: 'movies',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = [...state.movies, action.payload];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
  }
});

const { actions: movieActions, reducer: movieReducer } = movieSlice;

export default movieSlice;
