import { legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducer from "./reducers";

export const myStore = createStore(reducer, applyMiddleware(logger));
