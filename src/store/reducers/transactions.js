import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  creditLoading: false,
  creditError: null,
  creditLinks: [],

};

export default (state = INITIAL_STATE, action) => {

   console.log("stattttttttttttttew",state,action)
  switch (action.type) {
    // Sidebar links reducer cases
    case actionTypes.CREDIT_AMOUNT_REQUEST:
      return { ...state, creditLoading: true };

    case actionTypes.CREDIT_AMOUNT_SUCCESS:
      return {
        ...state,
        creditLoading: false,
        creditLinks: action.payload,
      };

    case actionTypes.CREDIT_AMOUNT_FAILURE:
      return {
        ...state,
        creditLoading: false,
        creditError: action.error,
      };
      default:
        return state;

}
}