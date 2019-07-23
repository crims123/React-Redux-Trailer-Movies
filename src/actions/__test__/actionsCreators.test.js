// we are going to test and async functions https://redux.js.org/recipes/writing-tests
// we need to test that our store recives the dispatch changes well


import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../actions/actionsCreators';
import * as types from '../../actions/types';
import fetchMock from 'fetch-mock';


const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
    fetchMock.getOnce('/todos', {
      body: { todos: ['do something'] },
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [
      { type: types.FETCH_MOVIES_REQUEST },
      { type: types.FETCH_MOVIES_SUCCESS, body: { todos: ['do something'] } }
    ]
    const store = mockStore({ todos: [] })

    return store.dispatch(actions.fetchMovies(1))
    })
})