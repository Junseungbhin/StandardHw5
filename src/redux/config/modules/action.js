export const ADD_TEXT = "ADD_TEXT";

export const addText = (text) => (dispatch) => {
  dispatch({
    type: ADD_TEXT,
    payload: text,
  });
  updateLocalStorage(text);
};

// 로컬 스토리지 업데이트 함수
const updateLocalStorage = (text) => {
  const storedTexts = JSON.parse(localStorage.getItem("texts")) || [];
  const updatedTexts = [...storedTexts, text];
  localStorage.setItem("texts", JSON.stringify(updatedTexts));
};
