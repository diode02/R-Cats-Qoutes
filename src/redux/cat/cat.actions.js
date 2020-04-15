import { CatActionTypes } from "./cat.types";

export const apiRequest = () => ({
  type: CatActionTypes.API_REQUEST,
});

export const apiSucess = (payload) => ({
  type: CatActionTypes.API_SUCCESS,
  payload,
});

export const apiFailure = (error) => ({
  type: CatActionTypes.API_FAILURE,
  payload: error.message,
});
