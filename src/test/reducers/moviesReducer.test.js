import React from "react";

import reducer from "../../reducers/moviesReducer";
import { FETCH_MOVIE_SUCCESS } from "../../actions/types";

// en este testing solo se va a usar jest
describe("movie Reducer test", () => {

  it("return the initial state", () => {
    const action = {
      type: "Testing"
    }
    expect(reducer([], action)).toEqual([]);
  });

  it("can handle FETCH_MOVIES_SUCCESS", () => {
    const action = {
      type: FETCH_MOVIE_SUCCESS,
      payload: [4, 5, 6]
    }
    expect(reducer([], action)).toEqual({movieDetails: [4, 5, 6]});
  });

});