
export const GET_MATCHES = "GET_MATCHES";
export const GET_MATCHES_SUCCESS = "GET_MATCHES_SUCCESS";
export const GET_MATCHES_FAIL = "GET_MATCHES_FAIL";

export const SET_LEAGUE = "SET_LEAGUE";
export const SET_WEEK = "SET_WEEK";


export const getMatches = () => ({
  type: GET_MATCHES,
});

export const getMatchesSuccess = (payload) => ({
  type: GET_MATCHES_SUCCESS,
  payload,
});

export const getMatchesFail = (payload) => ({
  type: GET_MATCHES_FAIL,
  payload,
});

export const setLeague = (payload) => ({
  type: SET_LEAGUE,
  payload,
});

export const setWeek = (payload) => ({
  type: SET_WEEK,
  payload,
});
