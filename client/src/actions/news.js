import api from "utils/api";
import {
  GET_NEWS,
  REMOVE_NEWS,
  NEW_NEWS,
  EDIT_NEWS,
  UPLOAD_NEWS_IMAGE
} from "./types";
import { setAlert } from "./alert";
// Fetch all news
export const getNews = () => async (dispatch) => {
  try {
    const res = await api.get("/api/news");
    dispatch({
      type: GET_NEWS,
      payload: res.data
    });
  } catch (error) {
    console.error(error);
  }
};
// new or edit
export const newOredit = (formData, edit, history) => async (dispatch) => {
  try {
    if (edit) {
      const res = await api.put(`/api/news/${formData._id}`, formData);

      dispatch({
        type: EDIT_NEWS,
        payload: res.data.editNews
      });

      dispatch(setAlert("Sucsess", "success"));
    }
    if (!edit) {
      const res = await api.post(`/api/news/create`, formData);
      dispatch({
        type: NEW_NEWS,
        payload: res.data.addNews
      });
      history.push(`/dashboard`);
      dispatch(setAlert("Sucsess", "success"));
    }
  } catch (err) {
    if (err) {
      dispatch(setAlert("something went wrong please try again", "danger"));
    }
  }
};

export const removeNews = (id) => async (dispatch) => {
  if (window.confirm("Are you sure? This cannot be undone!")) {
    try {
      await api.delete(`/api/news/${id}`);

      dispatch({ type: REMOVE_NEWS, payload: id });

      dispatch(setAlert(" Removed", "danger"));
    } catch (err) {
      console.error(err);
      dispatch(setAlert("something went wrong please try again", "danger"));
    }
  }
};
export const newImage = (_id, reducerType, type, image) => async (dispatch) => {
  try {
    const data = { image };

    const res = await api.put(`/api/${type}/${_id}/uploadimage`, data);

    dispatch({
      type: reducerType,
      payload: res.data.editNews
    });
    dispatch(setAlert("Success", "success"));
  } catch (err) {
    dispatch(setAlert("something went wrong please try again", "danger"));
    console.error(err);
  }
};
