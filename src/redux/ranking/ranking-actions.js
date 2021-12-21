
export const GET_RANKING = "GET_RANKING";
export const GET_RANKING_SUCCESS = "GET_RANKING_SUCCESS";
export const GET_RANKING_FAIL = "GET_RANKING_FAIL";

export const getRanking = () => ({
  type: GET_RANKING,
});

export const getRankingSuccess = (payload) => ({
  type: GET_RANKING_SUCCESS,
  payload,
});

export const getRankingFail = (payload) => ({
  type: GET_RANKING_FAIL,
  payload,
});