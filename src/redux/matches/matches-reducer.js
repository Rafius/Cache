import { reducerFactory } from "../reducer-factory";
import {
  SET_WEEK,
  GET_MATCHES,
  GET_MATCHES_FAIL,
  GET_MATCHES_SUCCESS,
  SET_LEAGUE
} from "./matches-actions";

const initialState = {
  weeks: [],
  week: 5,
  league: "low",
  isLoading: false
};

const getMatchesHandler = (state) => ({
  ...state,
  isLoading: true
});

const getMatchesSuccessHandler = (state, action) => ({
  ...state,
  ...action.payload.matches,
  isLoading: false
});

const getMatchesFailHandler = (state) => ({
  ...state,
  isLoading: false
});

const setLeagueHandler = (state, action) => ({
  ...state,
  league: action.payload
});

const setWeekHandler = (state, action) => ({
  ...state,
  week: action.payload
});

const handlers = {
  [GET_MATCHES]: getMatchesHandler,
  [GET_MATCHES_SUCCESS]: getMatchesSuccessHandler,
  [GET_MATCHES_FAIL]: getMatchesFailHandler,
  [SET_LEAGUE]: setLeagueHandler,
  [SET_WEEK]: setWeekHandler
};

export default reducerFactory(initialState, handlers);
