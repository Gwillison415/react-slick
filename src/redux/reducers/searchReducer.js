import * as CONST from "../constants";

export const initialSearchState = {
  infoMessage: "",
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
  currentSearch: "",
};

export default (state = initialSearchState, action) => {
  switch (action.type) {
    case CONST.ADD_SEARCH_RESULTS_BEGIN:
      // const {refreshToken, otherPayload} = objectToDestruct
      return {
        ...state,
        infoMessage: "STARTED searching",
      };
    case CONST.ADD_SEARCH_RESULTS_SUCCESS:
      return {
        ...state,
        infoMessage: "results obtained",
        ...action.payload,
      };
    case CONST.ADD_SEARCH_RESULTS_FAIL:
      return {
        ...state,
        infoMessage: "results failed",
      };
    case CONST.AUGMENT_SEARCH_RESULTS_BEGIN:
      // const {refreshToken, otherPayload} = objectToDestruct
      return {
        ...state,
        infoMessage: "CONTINUED searching",
      };
    case CONST.AUGMENT_SEARCH_RESULTS_SUCCESS:
      const newResults = action.payload.results;
      const newPage = action.payload.page;
      return {
        ...state,
        infoMessage: "results obtained",
        page: newPage,
        results: [...state.results.concat(newResults)],
      };
    case CONST.AUGMENT_SEARCH_RESULTS_FAIL:
      return {
        ...state,
        infoMessage: "next set of results failed",
      };
    default:
      return state;
  }
};
