import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

const initialState = {};
const enhancers = [];
const middlewares = [];

if (process.env.NODE_ENV === 'development') {
      const { __REDUX_DEVTOOLS_EXTENSION__ } = window;

      if (typeof __REDUX_DEVTOOLS_EXTENSION__ === 'function') {
            enhancers.push(__REDUX_DEVTOOLS_EXTENSION__());
      }
}

const composedEnhancers = compose(
      applyMiddleware(...middlewares),
      ...enhancers,
);

const store = createStore(reducers, initialState, composedEnhancers);

export default store;
