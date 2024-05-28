// App.js
import React from "react";
import TextInput from "./components/TextInput";
import TextList from "./components/TextList";
import { TextProvider } from "./context/TextContext";

function App() {
  return (
    <TextProvider>
      <div>
        <h1>Text Input and Listing</h1>
        <TextInput />
        <TextList />
      </div>
    </TextProvider>
  );
}

export default App;
