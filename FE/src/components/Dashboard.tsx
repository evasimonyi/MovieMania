import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchMovies } from '../redux/movieSlice';
import Grid from '@mui/material/Grid';
import Movies from './Movies/Movies';
import { useAppDispatch } from '../redux/reduxHooks';
import { RootState } from '../redux/store';
import { MovieType } from './Movies/MovieTypes';
import { findMovies } from '../utils/movieMethods';

type DashboardProps = {
  searchedMovie: string,
}

const Dashboard = (props: DashboardProps) => {
  const { searchedMovie } = props;
  const dispatch = useAppDispatch();
  const state = useSelector((state: RootState) => state.movies);
  const { movies } = state;

  const [filteredMovies, setFilteredMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  useEffect(() => {
    const filtered = findMovies(searchedMovie, movies);
    setFilteredMovies(filtered);
  }, [searchedMovie, movies]);

  return (
    <Grid
      container
      xs={12}
      sx={{
        justifyContent: 'center',
        display: 'flex',
        width: '100%',
        flex: 1,
        paddingBottom: '1em',
        overflow: 'auto'
      }}
    >
      {searchedMovie.length > 0 && <Movies movies={filteredMovies} />}
      {searchedMovie.length === 0 && <Movies movies={movies} />}
    </Grid>
  )
}

export default Dashboard;
