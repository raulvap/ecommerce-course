// Lesson 115: will store the states
import { createStore, applyMiddleware } from "redux";

// Lesson 141: allows our browser to cache the info
import { persistStore } from "redux-persist";

// import the middleware:
import logger from "redux-logger";

import rootReducer from "./root-reducer";

// set up the middlewares:
const middlewares = [logger];

// set up the store:
// const store = createStore(rootReducer, applyMiddleware(...middlewares));

// Lesson 141: sesion storage modifications:
const store = createStore(rootReducer, applyMiddleware(...middlewares));
const persistore = persistStore(store);

export { store, persistore };
