import { combineReducers } from 'redux';
import currencyList from './currencyList';
import value from './value';

export default combineReducers({
      value,
      currencyList,
});
