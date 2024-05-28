// TextList.jsx

import React from 'react';
import { useSelector } from 'react-redux';

function TextList() {
  // Redux 스토어에서 texts 상태를 가져옵니다.
  const texts = useSelector((state) => state.textReducer.texts);

  return (
    <ul>
      {texts.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </ul>
  );
}

export default TextList;

