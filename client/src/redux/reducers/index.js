import { combineReducers } from "redux";
import { productReducer } from "./productsReducer";
import { notificationReducer } from "./notificationReducer";

const reducers = combineReducers({
  productReducer: productReducer,
  notificationReducer: notificationReducer
});

export default reducers;
