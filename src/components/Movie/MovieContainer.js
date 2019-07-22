import { connect } from "react-redux";

import Movie from "../Movie/Movie";

const mapStateToProps = state => {
  return {
    movie: state
  };
};

export default connect(
  mapStateToProps,
  null
)(Movie);
