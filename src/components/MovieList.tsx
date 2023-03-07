import React from 'react';

type Movie = {
  Poster: string,
  Title: string,
  Type: string,
  Year: string,
  imdbID: string,
};

type MovieListProps = { movies: Movie[] };

const MovieList = (props: MovieListProps) => {
  const { movies } = props;
  return (
    <>
      {movies.map((movie) => (
        <div key={movie.Title}>
          <img src={movie.Poster} alt='movie'></img>
        </div>
      ))}
    </>
  );
};

export default MovieList;
