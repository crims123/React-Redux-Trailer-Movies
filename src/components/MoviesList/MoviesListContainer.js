import { connect } from "react-redux";

import MoviesList from "../MoviesList/MoviesList";
import { fetchMovies, fetchMovie } from "../../actions/actionsCreators";

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMoviesList(id) {
      dispatch(fetchMovies(id));
    },
    fetchMovie(id) {
      dispatch(fetchMovie(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesList);
