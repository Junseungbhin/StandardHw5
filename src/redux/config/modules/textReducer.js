// reducers.js

import { ADD_TEXT, INIT_TEXTS } from "./action";

const initialState = {
  texts: [],
};

const textReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEXT:
      return {
        ...state,
        texts: [...state.texts, action.payload],
      };
    case INIT_TEXTS:
      return {
        ...state,
        texts: action.payload,
      };
    default:
      return state;
  }
};

export default textReducer;
