import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import initialApiStore from './mocks/stash.json';


const api = (state = {}, action) => {
  switch (action.type) {
    case 'STASH_LOAD':
      return initialApiStore;
    default:
      return state;
  }
};

const reducers = combineReducers({
  api,
});

export default createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
);
