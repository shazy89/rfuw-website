import api from "utils/api";
import { GET_EVENTS, EDIT_EVENTS, CLEAR_DATA } from "./types";
import { setAlert } from "./alert";
export const getEvents = () => async (dispatch) => {
  try {
    const res = await api.get("/api/events");

    dispatch({
      type: GET_EVENTS,
      payload: res.data
    });
  } catch (error) {
    console.error(error);
  }
};

// edit
export const editEvent = (formData) => async (dispatch) => {
  try {
    const res = await api.put(`/api/events/${formData._id}`, formData);

    dispatch({
      type: EDIT_EVENTS,
      payload: res.data.updateEvent
    });

    dispatch(setAlert("Sucsess", "success"));
  } catch (err) {
    if (err) {
      dispatch(setAlert("something went wrong please try again", "danger"));
    }
  }
};

export const clearData = () => (dispatch) => {
  dispatch({
    type: CLEAR_DATA
  });
};
