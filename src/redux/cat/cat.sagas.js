import { call, put, takeLatest, all } from "redux-saga/effects";

import { apiFailure, apiSucess } from "./cat.actions";
import { CatActionTypes } from "./cat.types";

const catFetch = async () => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const data = await res.json();
  return data[0].url;
};
const qouteFetch = async () => {
  const res = await fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes");
  const data = await res.json();
  return data[0];
};

function* fetchCatQouteAync() {
  try {
    const [catImageUrl, qouteText] = yield all([
      call(catFetch),
      call(qouteFetch),
    ]);
    const payLoad = { catImageUrl, qouteText };
    yield put(apiSucess(payLoad));
  } catch (error) {
    yield put(apiFailure(error));
  }
}

export function* fetchCatQouteRequest() {
  yield takeLatest(CatActionTypes.API_REQUEST, fetchCatQouteAync);
}
