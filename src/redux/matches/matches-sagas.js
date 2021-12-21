import { call, put, takeLatest, select } from "redux-saga/effects";
import fetchApi from "@/utils/fetch-api";
import { GET_MATCHES, getMatchesSuccess, } from "./matches-actions";
import { matchesLeagueSelector } from "./matches-selectors";
import { getMatchesFail } from ".";

const urlLocal = "http://localhost:3001/";
const urlProd = "https://padel-api.vercel.app/matches";

function* getMatches() {
  try {
    const league = yield select(matchesLeagueSelector);

    const response = yield call(fetchApi, {
      url: `${urlProd}?league=${league}`
    });

    yield put(getMatchesSuccess(response));
  } catch (e) {
    yield put(getMatchesFail(e));
    console.log("getMatches FAIL", e);
  }
}


export default function* matchesSaga() {
  yield takeLatest([GET_MATCHES], getMatches);
}
