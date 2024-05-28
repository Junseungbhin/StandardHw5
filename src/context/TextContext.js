import React, { createContext, useContext, useState, useEffect } from "react";

const TextContext = createContext();

export const useTextContext = () => useContext(TextContext);

export const TextProvider = ({ children }) => {
  const [texts, setTexts] = useState(() =>
    localStorage.getItem("texts")
      ? JSON.parse(localStorage.getItem("texts"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("texts", JSON.stringify(texts));
  }, [texts]);

  const onAddText = (text) => {
    setTexts((prevTexts) => [...prevTexts, text]);
  };
  return (
    React.createElement(TextContext.Provider, { value: { texts, onAddText } }, children)
  );
};
