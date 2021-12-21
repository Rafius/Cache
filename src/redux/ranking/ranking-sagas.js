import { call, put, takeLatest, select } from "redux-saga/effects";

import fetchApi from "@/utils/fetch-api";
import { matchesLeagueSelector } from "@/redux/matches/matches-selectors";
import { getRankingSuccess, GET_RANKING } from "./ranking-actions";

const urlProd = "https://padel-api.vercel.app/ranking";

function* getRanking() {
  try {
    const league = yield select(matchesLeagueSelector);

    const response = yield call(fetchApi, {
      url: `${urlProd}?league=${league}`
    });

    yield put(getRankingSuccess(response));
  } catch (e) {
    yield put(getRankingFail(e));
    console.log("getRanking FAIL", e);
  }
}


export default function* rankingSaga() {
  yield takeLatest([GET_RANKING], getRanking);
}
