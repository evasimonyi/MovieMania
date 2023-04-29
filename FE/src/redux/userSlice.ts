import { createSlice } from '@reduxjs/toolkit';
import { MovieType } from '../components/Movies/MovieTypes';

type StateType = {
  username: string,
  watchlist: MovieType[],
}

const initialState: StateType = {
  username: 'guest',
  watchlist: [],
}

const userSlice = createSlice({
  name: 'userstate',
  initialState,
  reducers: {
    addToWatchlist: (state, action) => {
      state.watchlist = [...state.watchlist, action.payload]
    }
  },
})

export const { addToWatchlist } = userSlice.actions;
export default userSlice;
