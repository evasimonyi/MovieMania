import Grid from '@mui/system/Unstable_Grid';

type Movie = {
  id: number,
  title: string,
  year: string,
  img: string,
  length: number,
};

type MoviesProps = { movies: Movie[] };

const Movies = (props: MoviesProps) => {
  const { movies } = props;
  console.log(movies);
  return (
    <Grid
      container
      sx={{
        gap: 1,
        // gridTemplateColumns: 'minmax(200px, 1fr) 3fr;',
      }}
    >
      {movies.map((movie) => (
        <Grid key={movie.id}>
          <img src={movie.img} alt='movie' style={{ width: '200px', height: '300px' }}></img>
        </Grid>
      ))
      }
    </Grid >
  );
};

export default Movies;
