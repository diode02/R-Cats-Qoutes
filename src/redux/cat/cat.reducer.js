import { CatActionTypes } from "./cat.types";

const INITIAL_STATE = {
  catImageUrl: "",
  quoteText: "",
  isFetching: false,
  error: null,
};

const catReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CatActionTypes.API_REQUEST:
      return { ...state, isFetching: true, error: null };

    case CatActionTypes.API_SUCCESS:
      return {
        ...state,
        isFetching: false,
        catImageUrl: action.payload.catImageUrl,
        quoteText: action.payload.qouteText,
      };

    case CatActionTypes.API_FAILURE:
      return { ...state, isFetching: false, error: action.payload };

    default:
      return state;
  }
};

export default catReducer;
