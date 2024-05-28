import { addText } from "./action";

export const addTextAction = (text) => {
  return async (dispatch) => {
    localStorage.setItem('texts', JSON.stringify(text));
    dispatch(addText(text));
  };
};
