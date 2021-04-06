// Lesson 115: will store the states
import { createStore, applyMiddleware } from "redux";

// import the middleware:
import logger from "redux-logger";

import rootReducer from "./root-reducer";

// set up the middlewares:
const middlewares = [logger];

// set up the store:
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
