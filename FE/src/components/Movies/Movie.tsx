import { MovieType } from './MovieTypes';

type MovieProps = {
  movie: MovieType,
};

const Movie = (props: MovieProps) => {
  const { movie } = props;
  return (
    <>
      <div>
        <img src={movie.img} alt="movie" />
      </div>
    </>
  );
};

export default Movie;
