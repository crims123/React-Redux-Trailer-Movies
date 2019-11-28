import React from "react";
import { Link } from "react-router-dom";

const MoviesListPagination = props => {
  const { id, paginationList, totalPages, changePage } = props;
  return (
    <div className="movies-list__pagination">
      <ul className="movies-list__pagination-list">
        {Number(id) !== 1 ? (
          <li className="movies-list__pagination-list-item">
            <Link
              onClick={() => changePage()}
              className="movies-list__pagination-list-item-link"
              to={`/page/${Number(id) - 1}`}
            >
              Previous
            </Link>
          </li>
        ) : null}
        {paginationList.map((page, index) => {
          return (
            <li
              className={`movies-list__pagination-list-item ${
                index === 0 ? "movies-list__pagination-list-item--selected" : ""
              }`}
            >
              <Link
                onClick={() => changePage()}
                className="movies-list__pagination-list-item-link"
                to={`/page/${page}`}
              >
                {page}
              </Link>
            </li>
          );
        })}
        {Number(id) !== totalPages ? (
          <li className="movies-list__pagination-list-item">
            <Link
              onClick={() => changePage()}
              className="movies-list__pagination-list-item-link"
              to={`/page/${Number(id) + 1}`}
            >
              Next
            </Link>
          </li>
        ) : null}
      </ul>
    </div>
  );
};

export default MoviesListPagination;
