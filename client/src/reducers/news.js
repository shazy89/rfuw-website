import {
  GET_NEWS,
  REMOVE_NEWS,
  NEW_NEWS,
  EDIT_NEWS,
  UPLOAD_NEWS_IMAGE
} from "actions/types";

const initialState = {
  news: [],
  loading: true
};
function news(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_NEWS:
      return {
        ...state,
        news: payload,
        loading: false
      };
    case NEW_NEWS:
      return {
        ...state,
        news: [payload, ...state.news],
        loading: false
      };
    case UPLOAD_NEWS_IMAGE:
    case EDIT_NEWS:
      return {
        ...state,
        news: state.news.map((obj) =>
          obj._id === payload._id ? payload : obj
        ),
        loading: false
      };
    case REMOVE_NEWS:
      return {
        news: state.news.filter((obj) => obj._id !== payload),
        loading: false
      };

    default:
      return state;
  }
}

export default news;
