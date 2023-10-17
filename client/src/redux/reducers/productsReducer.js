import { ActionTypes } from "../constants/action-types";
const initialState = {
  electronics: [{}],
  fashion: [{}],
  jewelry: [{}],
  bags: [{}],
  toys: [{}],
  beauty: [{}],
  automobile: [{}],
  furniture: [{}],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_FURNITURE:
      return { ...state, furniture: payload };
    case ActionTypes.SET_ELECTRONICS:
      return { ...state, electronics: payload };
    case ActionTypes.SET_FASHION:
      return { ...state, fashion: payload };
    case ActionTypes.SET_JEWELRY:
      return { ...state, jewelry: payload };
    case ActionTypes.SET_BAGS:
      return { ...state, bags: payload };
    case ActionTypes.SET_TOYS:
      return { ...state, toys: payload };
    case ActionTypes.SET_BEAUTY:
      return { ...state, beauty: payload };
    case ActionTypes.SET_AUTOMOBILE:
      return { ...state, automobile: payload };
    default:
      return state;
  }
};
