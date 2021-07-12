import {
  GET_LIMITERS,
  REMOVE_PRODUCT,
  NEW_LIMITERS,
  EDIT_LIMITERS,
  UPLOAD_LIMITER_IMAGE
} from "actions/types";

const initialState = {
  limiters: [],
  loading: true
};
function limiters(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_LIMITERS:
      return {
        ...state,
        limiters: payload,
        loading: false
      };
    case NEW_LIMITERS:
      return {
        ...state,
        limiters: [payload.addLimiter, ...state.limiters],
        loading: false
      };
    case UPLOAD_LIMITER_IMAGE:
    case EDIT_LIMITERS:
      return {
        ...state,
        limiters: state.limiters.map((obj) =>
          obj._id === payload._id ? payload : obj
        ),
        loading: false
      };
    case REMOVE_PRODUCT:
      return {
        limiters: state.limiters.filter((obj) => obj._id !== payload),
        loading: false
      };

    default:
      return state;
  }
}

export default limiters;
