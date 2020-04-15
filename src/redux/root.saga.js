import { call, all } from "redux-saga/effects";

import { fetchCatQouteRequest } from "./cat/cat.sagas";

export default function* rootSaga() {
  yield all([call(fetchCatQouteRequest)]);
}
