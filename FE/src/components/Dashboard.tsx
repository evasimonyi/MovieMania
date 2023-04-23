import * as React from 'react';
import { useSelector } from 'react-redux';
import { fetchMovies } from '../redux/movieSlice';
import image from '../styles/images/dashboard-bg.jpg';
import Grid from '@mui/system/Unstable_Grid';
import Movies from './Movies';
import { useAppDispatch } from '../redux/reduxHooks';
import { RootState } from '../redux/store';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const state = useSelector((state: RootState) => state.movies);

  const { movies } = state;

  React.useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <Grid
      sx={{
        // overflow: 'scroll',
        backgroundImage: `url('${image}')`,
        backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center',
        width: '100%',
        // height: '100%',
      }}>
      <Movies movies={movies} />
    </Grid>
  )
}

export default Dashboard;
