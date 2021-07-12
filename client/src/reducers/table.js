import {
  switchDriversHeaders,
  limiterHeaders,
  switchesHeaders
} from "./constants";

const initialState = {
  limiterHeaders,
  switchesHeaders,
  switchDriversHeaders
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
}
