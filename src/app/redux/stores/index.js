import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import reduxPromise from "redux-promise-middleware";
import app from "../reducers";

const store = createStore(app, applyMiddleware(
  reduxPromise(),
  createLogger()
));

export default store;
