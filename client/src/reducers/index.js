import { combineReducers } from 'redux';
import valueRange from './valueRange';
import currencyList from './currencyList';

export default combineReducers({
      currencyList,
      valueRange,
});
