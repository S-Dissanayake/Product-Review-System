import { ActionTypes } from "../constants/action-types";
const initialState = {
  isProductsFetched: false,
};

export const notificationReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_FETCH_PRODUCTS_SUCCEEDED_NOTIFICATION:
      return { ...state, isProductsFetched: true };

    default:
      return state;
  }
};
