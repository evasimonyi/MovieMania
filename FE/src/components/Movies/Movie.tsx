import { MovieType } from './MovieTypes';

type MovieProps = {
  movie: MovieType,
};

const Movie = (props: MovieProps) => {
  const { movie } = props;
  return (
    <>
      <div key={movie._id}>
        <img src={movie.img} alt='movie'></img>
      </div>
    </>
  );
};

export default Movie;
