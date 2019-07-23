// we are going to test and async functions https://redux.js.org/recipes/writing-tests
// we need to test that our store recives the dispatch changes well

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { fetchMovie } from "../../actions/actionsCreators";
import fetchMock from "fetch-mock";
import { getMoviesList, getMovie } from "../../api/request";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("creates request and succes actions on fetchMovies", () => {
    const url = getMoviesList(1);

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        const expectedActions = [
          { type: "FETCH_MOVIE_REQUEST" },
          { type: "FETCH_MOVIE_SUCCESS", payload: data }
        ];

        const store = mockStore({});

        return store.dispatch(fetchMovie(420818)).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
  });

  it("creates request and succes actions on fetchMovie", () => {
    const url = getMovie(420818);

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        const expectedActions = [
          { type: "FETCH_MOVIE_REQUEST" },
          { type: "FETCH_MOVIE_SUCCESS", payload: data }
        ];

        const store = mockStore({});

        return store.dispatch(fetchMovie(420818)).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
  });
});
