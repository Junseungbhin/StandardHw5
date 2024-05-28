// actions.js

export const ADD_TEXT = 'ADD_TEXT';
export const INIT_TEXTS = 'INIT_TEXTS';

export const addText = (text) => {
  return (dispatch, getState) => {
    const { textReducer } = getState(); 
    const storedTexts = textReducer.texts; 

    if (!storedTexts.includes(text)) { 
      dispatch({
        type: ADD_TEXT,
        payload: text,
      });
      
      const updatedTexts = [...storedTexts, text]; 
      updateLocalStorage(updatedTexts);
    }
  };
};

export const initTexts = () => {
  return {
    type: INIT_TEXTS,
    payload: getStoredTexts(),
  };
};

const updateLocalStorage = (texts) => {
  localStorage.setItem('texts', JSON.stringify(texts));
};

const getStoredTexts = () => {
  const storedTexts = localStorage.getItem('texts');
  return storedTexts ? JSON.parse(storedTexts) : [];
};
