import {
  GET_CO_LIMITERS,
  REMOVE_PRODUCT,
  NEW_CO_LIMITERS,
  EDIT_CO_LIMITERS,
  UPLOAD_CO_LIMITER_IMAGE
} from "actions/types";

const initialState = {
  colimiters: [],
  loading: true
};
function coLimiters(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CO_LIMITERS:
      return {
        ...state,
        colimiters: payload,
        loading: false
      };
    case NEW_CO_LIMITERS:
      return {
        ...state,
        colimiters: [payload.addLimiter, ...state.colimiters],
        loading: false
      };
    case UPLOAD_CO_LIMITER_IMAGE:
    case EDIT_CO_LIMITERS:
      return {
        ...state,
        colimiters: state.colimiters.map((obj) =>
          obj._id === payload._id ? payload : obj
        ),
        loading: false
      };
    case REMOVE_PRODUCT:
      return {
        colimiters: state.colimiters.filter((obj) => obj._id !== payload),
        loading: false
      };

    default:
      return state;
  }
}

export default coLimiters;
