// App.jsx
import React from "react";
import TextInput from "./components/TextInput";
import TextList from "./components/TextList";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Text Input and Listing</h1>
        <TextInput />
        <TextList />
      </div>
    </Provider>
  );
}

export default App;
