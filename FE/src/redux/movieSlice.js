import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMovies } from '../utils/movieMethods';

export const fetchMovies = createAsyncThunk(
  'get-movies',
  async () => await getMovies(),
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
        state.movies = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.movies = [];
        state.isLoading = false;
        state.error = action.error.message;
      })
  }
});

export default movieSlice;
