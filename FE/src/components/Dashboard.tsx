import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { fetchMovies, findMovies } from '../redux/movieSlice';
import Grid from '@mui/material/Grid';
import Movies from './Movies/Movies';
import { useAppDispatch } from '../redux/reduxHooks';
import { RootState } from '../redux/store';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const state = useSelector((state: RootState) => state.movies);
  const { movies } = state;

  const filteredMovies = useMemo(() => findMovies(state.searchedMovieTitle, movies), [state.searchedMovieTitle]);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <Grid
      container
      sx={{
        justifyContent: 'center',
        display: 'flex',
        width: '100%',
        flex: 1,
        paddingBottom: '1em',
        overflow: 'auto'
      }}
    >
      <Movies movies={state.searchedMovieTitle.length > 0 ? filteredMovies : movies} />
    </Grid>
  )
}

export default Dashboard;
