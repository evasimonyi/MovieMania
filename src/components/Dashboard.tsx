import Movies from './Movies';
import { movies } from './movieList';
import image from '../images/dashboard-bg.jpg';
import Grid from '@mui/system/Unstable_Grid';

const Dashboard = () => {
  console.log(movies);
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
      {/* <Movies movies={movies} /> */}
    </Grid>
  )
}

export default Dashboard;
