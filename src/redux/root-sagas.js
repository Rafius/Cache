import { all, fork } from "redux-saga/effects";

import { matchesSagas } from "./matches";
import { rankingSagas } from "./ranking";

export default function* rootSaga() {
  yield all([fork(matchesSagas)]);
  yield all([fork(rankingSagas)]);
}
