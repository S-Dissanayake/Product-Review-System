import { ActionTypes } from "../constants/action-types";

export const setProductFetchSucceedNotification = () => {
  return {
    type: ActionTypes.SET_FETCH_PRODUCTS_SUCCEEDED_NOTIFICATION,
  };
};
