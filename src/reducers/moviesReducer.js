import { FETCH_MOVIES_SUCCESS, FETCH_MOVIE_SUCCESS } from "../actions/types";

function moviesReducer(state = [], action) {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return { ...state, popularMovies: action.payload };

    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        movieDetails: action.payload,
        movieSelectedId: action.payload.id
      };
    default:
      return state;
  }
}

export default moviesReducer;
