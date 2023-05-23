import Grid from '@mui/material/Grid';
import Movie from './Movie';
import { MovieType } from './MovieTypes';

type MoviesProps = { movies: MovieType[] };

const Movies = (props: MoviesProps) => {
  const { movies } = props;

  return (
    <Grid
      container
      gap={{ xs: 2, sm: 3, md: 5 }}
      justifyContent="center"
      direction="row"
    >
      {
        movies.map((movie) => (
          <Grid item xs={5} md={2.5} lg={2} xl={1.5} key={movie._id} sx={{ padding: '0 !important' }}>
            <Movie movie={movie} />
          </Grid>
        ))
      }
    </Grid >
  );
};

export default Movies;
