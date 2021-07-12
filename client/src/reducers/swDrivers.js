import {
  GET_SW_DRIVERS,
  REMOVE_PRODUCT,
  NEW_SW_DRIVERS,
  EDIT_SW_DRIVERS,
  UPLOAD_DRIVERS_IMAGE
} from "actions/types";

const initialState = {
  swdrivers: [],
  loading: true
};
function swDrivers(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_SW_DRIVERS:
      return {
        ...state,
        swdrivers: payload,
        loading: false
      };
    case NEW_SW_DRIVERS:
      return {
        ...state,
        swdrivers: [payload.driver, ...state.swdrivers],
        loading: false
      };
    case UPLOAD_DRIVERS_IMAGE:
    case EDIT_SW_DRIVERS:
      return {
        ...state,
        swdrivers: state.swdrivers.map((obj) =>
          obj._id === payload._id ? payload : obj
        ),
        loading: false
      };
    case REMOVE_PRODUCT:
      return {
        swdrivers: state.swdrivers.filter((obj) => obj._id !== payload),
        loading: false
      };

    default:
      return state;
  }
}

export default swDrivers;
