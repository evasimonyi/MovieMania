import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiRequest from '../utils/apiRequest';

export const fetchMovies = createAsyncThunk(
  'get-movies',
  async (apiURL) => {
    return await apiRequest('/movies', 'GET');
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

export default movieSlice;
