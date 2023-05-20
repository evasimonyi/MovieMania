import Grid from '@mui/system/Unstable_Grid';
import { MovieType } from './MovieTypes';

type MoviesProps = { movies: MovieType[] };

const Movies = (props: MoviesProps) => {
  const { movies } = props;

  return (
    <Grid
      container
      xs={10}
      sx={{
        justifyContent: 'space-between',
        rowGap: 4,
        columnGap: 3
      }}
    >
      {movies.map((movie) => (
        <Grid key={movie._id}>
          <img
            src={movie.img}
            alt={movie.title}
            style={{ width: '200px', height: '300px' }}
          />
        </Grid>
      ))
      }
    </Grid >
  );
};

export default Movies;
