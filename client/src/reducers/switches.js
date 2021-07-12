import {
  GET_SWITCHES,
  REMOVE_PRODUCT,
  NEW_SWITCHES,
  EDIT_SWITCHES,
  UPLOAD_SWITCH_IMAGE
} from "actions/types";

const initialState = {
  switches: [],
  loading: true
};
function switches(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_SWITCHES:
      return {
        ...state,
        switches: payload,
        loading: false
      };
    case NEW_SWITCHES:
      return {
        ...state,
        switches: [payload.addSwitch, ...state.switches],
        loading: false
      };
    case UPLOAD_SWITCH_IMAGE:
    case EDIT_SWITCHES:
      return {
        ...state,
        switches: state.switches.map((obj) =>
          obj._id === payload._id ? payload : obj
        ),
        loading: false
      };
    case REMOVE_PRODUCT:
      return {
        switches: state.switches.filter((obj) => obj._id !== payload),
        loading: false
      };

    default:
      return state;
  }
}

export default switches;
