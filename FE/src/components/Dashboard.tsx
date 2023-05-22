import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { fetchMovies, findMovies } from '../redux/movieSlice';
import Grid from '@mui/material/Grid';
import Movies from './Movies/Movies';
import { useAppDispatch } from '../redux/reduxHooks';
import { RootState } from '../redux/store';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const movieState = useSelector((state: RootState) => state.movies);
  const { movies } = movieState;

  const filteredMovies = useMemo(() => {
    return findMovies(movieState.searchedMovieTitle, movies)
  }, [movieState.searchedMovieTitle]);

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
      <Movies movies={movieState.searchedMovieTitle.length > 0 ? filteredMovies : movies} />
    </Grid>
  )
}

export default Dashboard;
