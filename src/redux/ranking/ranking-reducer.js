import { reducerFactory } from "../reducer-factory";
import {
  GET_RANKING,
  GET_RANKING_FAIL,
  GET_RANKING_SUCCESS,
} from "./ranking-actions";

const initialState = {
  data: [],
};

const getRankingHandler = (state) => ({
  ...state,
  isLoading: true,
});

const getRankingSuccessHandler = (state, action) => ({
  ...state,
  data: action.payload.ranking,
  isLoading: false,
});

const getRankingFailHandler = (state) => ({
  ...state,
  isLoading: false,
});


const handlers = {
  [GET_RANKING]: getRankingHandler,
  [GET_RANKING_SUCCESS]: getRankingSuccessHandler,
  [GET_RANKING_FAIL]: getRankingFailHandler,
};

export default reducerFactory(initialState, handlers);
