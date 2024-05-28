// App.jsx

import React, { useEffect } from 'react';
import TextInput from './components/TextInput';
import TextList from './components/TextList';
import { Provider } from 'react-redux';
import store from './redux/config/configStore';
import { initTexts } from './redux/config/modules/action';

function App() {
  useEffect(() => {
    store.dispatch(initTexts());
  }, []);

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
