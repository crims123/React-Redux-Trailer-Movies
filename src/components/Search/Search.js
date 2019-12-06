import React from "react";

import "./Search.scss";

const Search = props => {
  return (
    <form className="search__container" onSubmit={e => props.searchMovie(e)}>
      <input
        className="search__input"
        length="100%"
        id="search-movie"
        name="search-movie"
        placeholder="Search by movie, tv show, person..."
      />
      <button type="submit">
        <i class="fa fa-search" />
      </button>
    </form>
  );
};

export default Search;
