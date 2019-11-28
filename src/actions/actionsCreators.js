import { getMoviesList, getMovie, getSearchMovies } from "../api/request";
import { request, received, error } from "../actions/actionsBase";
import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_ERROR,
  FETCH_MOVIES_SEARCH_REQUEST,
  FETCH_MOVIES_SEARCH_SUCCESS,
  FETCH_MOVIES_SEARCH_ERROR
} from "../actions/types";

export const fetchMovies = id => dispatch => {
  dispatch(request(FETCH_MOVIES_REQUEST));
  return fetch(getMoviesList(id))
    .then(response => {
      return response.json();
    })
    .then(movies => {
      dispatch(received(FETCH_MOVIES_SUCCESS, movies));
    })
    .catch(response => {
      dispatch(error(FETCH_MOVIES_ERROR));
    });
};

export const fetchMovie = id => dispatch => {
  dispatch(request(FETCH_MOVIE_REQUEST));
  return fetch(getMovie(id))
    .then(response => {
      return response.json();
    })
    .then(movie => {
      return dispatch(received(FETCH_MOVIE_SUCCESS, movie));
    })
    .catch(response => {
      return dispatch(error(FETCH_MOVIE_ERROR));
    });
};

export const fetchSearchMovies = query => dispatch => {
  dispatch(request(FETCH_MOVIES_SEARCH_REQUEST));
  return fetch(getSearchMovies(query))
    .then(response => {
      return response.json();
    })
    .then(movies => {
      console.log(movies)
      return dispatch(received(FETCH_MOVIES_SEARCH_SUCCESS, movies));
    })
    .catch(response => {
      return dispatch(error(FETCH_MOVIES_SEARCH_ERROR));
    });
};
