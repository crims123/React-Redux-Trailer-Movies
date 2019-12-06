import React from "react";
import { Link } from "react-router-dom";

import "./Pagination.scss";

const Pagination = props => {
  const { id, paginationList, totalPages, changePage } = props;
  return (
    <div className="pagination">
      <ul className="pagination__list">
        {Number(id) !== 1 ? (
          <li className="pagination__list-item">
            <Link
              onClick={() => changePage()}
              className="pagination__link"
              to={`/page/${Number(id) - 1}`}
            >
              Previous
            </Link>
          </li>
        ) : null}
        {paginationList.map((page, index) => {
          return (
            <li
              className={`pagination__list-item ${
                index === 0 ? "pagination__list-item--selected" : ""
              }`}
            >
              <Link
                onClick={() => changePage()}
                className="pagination__link"
                to={`/page/${page}`}
              >
                {page}
              </Link>
            </li>
          );
        })}
        {Number(id) !== totalPages ? (
          <li className="pagination__list-item">
            <Link
              onClick={() => changePage()}
              className="pagination__link"
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

export default Pagination;
