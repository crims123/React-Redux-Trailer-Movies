import moviesReducer from "../moviesReducer";
import { FETCH_MOVIES_SUCCESS, FETCH_MOVIE_SUCCESS } from "../../actions/types";
import { isTSAnyKeyword, exportAllDeclaration, arrowFunctionExpression } from "@babel/types";

describe("moviesReducer", () => {
    it("send a FETCH_MOVIES_SUCCESS action type", () => {
        const action = { type: FETCH_MOVIES_SUCCESS, payload: "data"}
        expect(moviesReducer(action)).toEqual({popularMovies: action.payload})
    })
})