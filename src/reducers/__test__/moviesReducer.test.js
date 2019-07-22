import moviesReducer from "../moviesReducer";
import { FETCH_MOVIES_SUCCESS, FETCH_MOVIE_SUCCESS } from "../../actions/types";


describe("moviesReducer", () => {
    it("send a FETCH_MOVIES_SUCCESS action type", () => {
        const action = { type: FETCH_MOVIES_SUCCESS, payload: "data"}
        expect(moviesReducer([], action)).toEqual({popularMovies: action.payload})
    })

    it("send a FETCH_MOVIE_SUCCESS action type", () => {
        const action = { type: FETCH_MOVIE_SUCCESS, payload: {name: "Movie Name", id:21}}
        expect(moviesReducer([], action)).toEqual({movieDetails: payload, movieSelectedId:payload.id})
    })

    it("send an action with diferrent type", () => {
        const action = { type: "SPIDERMAN" }
        expect(moviesReducer([], action)).toEqual([])
    })
})