import { ADD_TEXT } from "./action";

export const addTextAsync = (text) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(addText(text));
    }, 1000); 
  };
};

const initialState = {
  texts: []
};

const textReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEXT:
      return {
        ...state,
        texts: [...state.texts, action.payload]
      };
    default:
      return state;
  }
};

export default textReducer;
