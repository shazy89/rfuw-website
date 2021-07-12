import { GET_EVENTS, EDIT_EVENTS, CLEAR_DATA } from "actions/types";

const initialState = {
  events: [],
  loading: true
};
function events(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_EVENTS:
      return {
        ...state,
        events: payload,
        loading: false
      };
    case EDIT_EVENTS:
      return {
        ...state,
        events: state.events.map((obj) =>
          obj._id === payload._id ? payload : obj
        ),
        loading: false
      };
    case CLEAR_DATA:
      return { ...state, events: [], loading: true };

    default:
      return state;
  }
}

export default events;
