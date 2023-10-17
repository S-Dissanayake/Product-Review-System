import { ActionTypes } from "../constants/action-types";

export const setElectronics = (products) => {
  return {
    type: ActionTypes.SET_ELECTRONICS,
    payload: products,
  };
};

export const setFashion = (products) => {
  return {
    type: ActionTypes.SET_FASHION,
    payload: products,
  };
};

export const setJewelry = (products) => {
  return {
    type: ActionTypes.SET_JEWELRY,
    payload: products,
  };
};

export const setBags = (products) => {
  return {
    type: ActionTypes.SET_BAGS,
    payload: products,
  };
};

export const setToys = (products) => {
  return {
    type: ActionTypes.SET_TOYS,
    payload: products,
  };
};

export const setBeauty = (products) => {
  return {
    type: ActionTypes.SET_BEAUTY,
    payload: products,
  };
};

export const setAutomobile = (products) => {
  return {
    type: ActionTypes.SET_AUTOMOBILE,
    payload: products,
  };
};

export const setFurniture = (products) => {
  return {
    type: ActionTypes.SET_FURNITURE,
    payload: products,
  };
};
