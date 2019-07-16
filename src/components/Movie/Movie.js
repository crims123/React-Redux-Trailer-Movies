import React from "react";

import "./Movie.scss";

const Movie = props => {
  const {
    movie: {
      movies: { movieDetails }
    }
  } = props;
  const movieId =
    movieDetails && movieDetails.videos && movieDetails.videos.results[0].key;

  return (
    <div className="movie">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-5 col-lg-5">
            <img
              src={`
                https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movieDetails && movieDetails.poster_path}
              `}
              alt="movie-cover"
              title="cover-movie"
              className="movie__cover"
            />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-7 col-lg-7">
            <div className="movie__info">
              <p className="movie__info-average">
                User Score: {movieDetails && movieDetails.vote_average}
              </p>
              <h4 className="movie__info-title">
                {movieDetails && movieDetails.title}
              </h4>
              <date className="movie__info-date">
                {movieDetails && movieDetails.release_date}
              </date>
              <p className="movie__info-overview">
                {movieDetails && movieDetails.overview}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <iframe
            title="trailer"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${movieId}?controls=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>
    </div>
  );
};

export default Movie;