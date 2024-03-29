import React from "react";

import "./Movie.scss";

const Movie = props => {
  const {
    movie: {
      movies: { movieDetails }
    }
  } = props;

  if (!props.movie.movies.movieDetails) {
    return null;
  } else {
    return (
      <div className="movie">
        <div className="container-fluid">
          <div className="movie__container">
            <div className="movie__cover-box">
              <img
                src={`
                https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movieDetails &&
                  movieDetails.poster_path}
              `}
                alt="movie-cover"
                title="cover-movie"
                className="movie__cover"
              />
            </div>

            <div className="movie__info">
              <p className="movie__info-average">
                User Score: {movieDetails && movieDetails.vote_average}
              </p>
              <h4 className="movie__info-title">
                {movieDetails && movieDetails.title}
              </h4>
              <h3>Overview</h3>
              <p className="movie__info-overview">
                {movieDetails && movieDetails.overview}
              </p>
            </div>
          </div>
          {movieDetails.videos.results.length !== 0 ? (
            <div className="movie__trailer-container">
              <div className="movie__trailer">
                <iframe
                  title="trailer"
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${
                    movieDetails.videos.results[0].key
                  }?controls=1`}
                  frameBorder="0"
                  allow="allowfullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                />
              </div>
            </div>
          ) : (
            <div className="movie__not-found">
              <h2 className="movie__not-found-text">
                Sorry we don't have a trailer for this Movie
              </h2>
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default Movie;
