import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { MovieType } from '../components/Movies/MovieTypes';

type StateType = {
  username: string;
  watchlist: MovieType[];
};

const initialState: StateType = {
  username: 'guest',
  watchlist: [],
};

const userSlice = createSlice({
  name: 'userstate',
  initialState,
  reducers: {
    addToWatchlist: {
      reducer: (state, action: PayloadAction<MovieType>) => {
        state.watchlist = [...state.watchlist, action.payload];
      },
      prepare: (payload: MovieType) => {
        return { payload };
      },
    },
  },
});

export const { addToWatchlist } = userSlice.actions;
export default userSlice;
