import { GET_FEATURED_PRODUCTS } from "actions/types";

const initialState = {
  products: [],
  loading: true
};

function featuredItems(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_FEATURED_PRODUCTS:
      return {
        ...state,
        products: payload,
        loading: false
      };
    default:
      return state;
  }
}

export default featuredItems;
