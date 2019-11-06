import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./MoviesList.scss";

class MoviesList extends Component {
  componentDidMount() {
    const { fetchMoviesList } = this.props;
    fetchMoviesList(1);
  }

  shortOverview = overview => {
    let shortOverview = overview.slice(0, 100);
    return shortOverview;
  };

  changePage = () => {
    setTimeout(() => {
      const {
        fetchMoviesList,
        match: {
          params: { id }
        }
      } = this.props;
      fetchMoviesList(id);
      window.scrollTo(0, 0);
    }, 1);
  };

  fetchIndividualMovie = id => {
    const { fetchMovie } = this.props;
    fetchMovie(id);
  };

  render() {
    const {
      movies: { popularMovies },
      match: {
        params: { id }
      }
    } = this.props;
    return (
      <div className="container">
        <div className="movies-list">
          <h3 className="movies-list__popular">Popular Movies</h3>
          <div className="row">
            {popularMovies &&
              popularMovies.map((movie, index) => {
                const {
                  id,
                  overview,
                  poster_path,
                  title,
                  release_date,
                  vote_average
                } = movie;
                return (
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <div className="movies-list__wrapper">
                      <div className="movies-list__media">
                        <Link to={`/movie/${id}`}>
                          <img
                            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${poster_path}`}
                            alt="movie-cover"
                            className="movies-list__media-image"
                            onClick={() => this.fetchIndividualMovie(id)}
                          />
                        </Link>
                      </div>
                      <div className="movies-list__info">
                        <div className="movies-list__info-container">
                          <div className="movies-list__info-average-container">
                            <div className="movies-list__info-average-icon">
                              <p className="movies-list__info-average">
                                {vote_average}
                              </p>
                            </div>
                          </div>
                          <div className="movies-list__info-title-container">
                            <Link
                              to={`/movie/${id}`}
                              onClick={() => this.fetchIndividualMovie(id)}
                              className="movies-list__info-title"
                            >
                              {title}
                            </Link>
                            <date className="movies-list__info-date">
                              {release_date}
                            </date>
                          </div>
                        </div>
                        <p className="movies-list__info-overview">
                          {this.shortOverview(overview)}
                        </p>
                        <Link
                          to={`/movie/${id}`}
                          onClick={() => this.fetchIndividualMovie(id)}
                          className="movies-list__info-link"
                        >
                          More Info
                        </Link>
                        <hr />
                      </div>
                    </div>
                  </div>
                );
              })}
            <div className="movies-list__pagination">
              <ul className="movies-list__pagination-list">
                <li className="movies-list__pagination-list-item">
                  <Link
                    onClick={() => this.changePage()}
                    className="movies-list__pagination-list-item-link"
                    to="/page/1"
                  >
                    1
                  </Link>
                </li>
                <li className="movies-list__pagination-list-item">
                  <Link
                    onClick={() => this.changePage()}
                    className="movies-list__pagination-list-item-link"
                    to="/page/2"
                  >
                    2
                  </Link>
                </li>
                <li className="movies-list__pagination-list-item">
                  <Link
                    onClick={() => this.changePage()}
                    className="movies-list__pagination-list-item-link"
                    to="/page/3"
                  >
                    3
                  </Link>
                </li>
                <li className="movies-list__pagination-list-item">
                  <Link
                    onClick={() => this.changePage()}
                    className="movies-list__pagination-list-item-link"
                    to="/page/4"
                  >
                    4
                  </Link>
                </li>
                <li className="movies-list__pagination-list-item">
                  <Link
                    onClick={() => this.changePage()}
                    className="movies-list__pagination-list-item-link"
                    to="/page/5"
                  >
                    5
                  </Link>
                </li>
                <li className="movies-list__pagination-list-item">
                  <Link
                    onClick={() => this.changePage()}
                    className="movies-list__pagination-list-item-link"
                    to={`/page/${Number(id) + 1}`}
                  >
                    Next
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div />
        </div>
      </div>
    );
  }
}

export default MoviesList;
