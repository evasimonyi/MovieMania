import { MovieType } from './MovieTypes';

type MovieProps = {
  movie: MovieType,
};

const Movie = (props: MovieProps) => {
  const { movie } = props;
  return (
    <>
      <div>
        <img src={movie.img} alt='movie'></img>
      </div>
    </>
  );
};

export default Movie;
