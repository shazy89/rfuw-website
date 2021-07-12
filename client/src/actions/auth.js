import api from "../utils/api";
import { LOGIN_SUCCESS, USER_LOADED, LOGOUT } from "./types";

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get("/auth");

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    console.error(err);
    //  dispatch({
    //    type: AUTH_ERROR,
    //  });
  }
};

// Login User
export const login = (email, password) => async (dispatch) => {
  const body = { email, password };

  try {
    const res = await api.post("auth/signin", body);

    await localStorage.setItem("token", res.data.token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    console.error(err);
    //let error = err.response.data.error;

    //  if (error) {
    ///   dispatch(setAlert(error, "danger"));
    //  console.error(error)
    //  }
  }
};

// LOGOUT

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
