import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./root.saga";

import rootReducer from "./root.reducer";

const reduxtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, logger];

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares), reduxtools)
);

sagaMiddleware.run(rootSaga);

export default store;
