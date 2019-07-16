import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers/index";

const middleware = thunk;

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// haciendo un dispatch:
// store.dispatch({
//   type: "LOAD_DATA"
//  })

// suscribiendome a cada cambio de estado
// const subscribe = store.subscribe(() => {
//   //console.log(store.getState());
// // muestra en consola cada vez que hay un cambio en el estado
// });


// obteniendo el estado actual de toda la aplicacion
// console.log(store.getState());

export default store;
