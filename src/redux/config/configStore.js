import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import textReducer from './modules/textReducer';

const rootReducer = combineReducers({
  textReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
