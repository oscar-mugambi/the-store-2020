import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

//middleware expected by store from redux is going to be an array

const middlewares = [logger];

// createStore is a function that gets rootReducer and the return value of applyMiddlewares

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
