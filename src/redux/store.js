import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import reducers from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  ReduxThunk
)(createStore);

const store = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
