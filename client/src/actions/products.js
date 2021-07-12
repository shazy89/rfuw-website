import api from "utils/api";
import { REMOVE_PRODUCT, GET_FEATURED_PRODUCTS } from "./types";
import { setAlert } from "./alert";
// Fetch all
export const getAll = (url, reducerType) => async (dispatch) => {
  try {
    const res = await api.get(`/api/${url}`);

    dispatch({
      type: reducerType,
      payload: res.data
    });
  } catch (error) {
    console.error(error);
  }
};

// new or edit
export const newOredit =
  (formData, reducerType, edit, history) => async (dispatch) => {
    try {
      if (edit) {
        const res = await api.put(
          `/api/${formData.type}/${formData._id}`,
          formData
        );
        dispatch({
          type: reducerType,
          payload: res.data
        });

        history.push(`/${formData.type}`);
        dispatch(setAlert("Sucsess", "success"));
      }
      if (!edit) {
        const res = await api.post(`/api/${formData.type}/create`, formData);

        dispatch({
          type: reducerType,
          payload: res.data
        });
        history.push(`/dashboard`);
        dispatch(setAlert("Sucsess", "success"));
      }
    } catch (err) {
      console.error(err.message);
      dispatch(setAlert("something went wrong please try again", "danger"));
    }
  };

export const removeProduct = (id, formType, history) => async (dispatch) => {
  if (window.confirm("Are you sure? This cannot be undone!")) {
    try {
      await api.delete(`/api/${formType}/${id}`);

      dispatch({ type: REMOVE_PRODUCT, payload: id });
      history.push(`/${formType}`);
      dispatch(setAlert(" Removed", "danger"));
    } catch (err) {
      dispatch(setAlert("something went wrong please try again", "danger"));
      console.error(err);
    }
  }
};
export const getFeaturedProducts = () => async (dispatch) => {
  try {
    const res = await api.get("/api/featured/items");

    dispatch({
      type: GET_FEATURED_PRODUCTS,
      payload: res.data
    });
  } catch (err) {
    dispatch(setAlert("something went wrong please try again", "danger"));
    console.error(err);
  }
};

export const newImage = (_id, reducerType, type, image) => async (dispatch) => {
  try {
    const data = { image };

    const res = await api.put(`/api/${type}/${_id}/uploadimage`, data);

    dispatch({
      type: reducerType,
      payload: res.data
    });
    dispatch(setAlert("Success", "success"));
  } catch (err) {
    dispatch(setAlert("something went wrong please try again", "danger"));
    console.error(err);
  }
};
