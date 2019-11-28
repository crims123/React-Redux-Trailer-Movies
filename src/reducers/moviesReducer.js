import {
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIES_SEARCH_SUCCESS
} from "../actions/types";

function moviesReducer(state = [], action) {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        popularMovies: action.payload.results,
        totalPages: action.payload.total_pages,
        searching: false
      };

    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        movieDetails: action.payload,
        movieSelectedId: action.payload.id
      };

    case FETCH_MOVIES_SEARCH_SUCCESS:
      return {
        ...state,
        popularMovies: action.payload.results,
        searching: true
      };
    default:
      return state;
  }
}

export default moviesReducer;
