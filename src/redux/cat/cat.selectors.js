import { createSelector } from "reselect";

const selectCat = (state) => state.cat;

export const selectCatImgUrl = createSelector(
  [selectCat],
  (cat) => cat.catImageUrl
);

export const selectCatQouteText = createSelector(
  [selectCat],
  (cat) => cat.quoteText
);
