import { configureStore } from '@reduxjs/toolkit';
import movieSlice from "./movieSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    movies: movieSlice.reducer,
    watchlist: userSlice.reducer,
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
