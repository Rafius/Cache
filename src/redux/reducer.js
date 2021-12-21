import { combineReducers } from "redux";
import { reducer as matches } from "./matches";
import { reducer as ranking } from "./ranking";

export const createRootReducer = () =>
  combineReducers({
    matches,
    ranking
  });
