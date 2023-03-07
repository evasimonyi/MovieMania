import React from 'react';

type MovieType = {
  Poster: string,
  Title: string,
  Type: string,
  Year: string,
  imdbID: string,
};

type MovieProps = {
  movie: MovieType,
};

const Movie = (props: MovieProps) => {
  const { movie } = props;
  return (
    <>
      <div key={movie.Title}>
        <img src={movie.Poster} alt='movie'></img>
      </div>
    </>
  );
};

export default Movie;
