import uniq from 'lodash/uniq';
import cf from '../config';
import { SET_CURRENCY_LIST } from '../config/action-types';

const initialState = cf.currencyList;

export default (state = initialState, { type, payload }) => {
      if (type === SET_CURRENCY_LIST) {
            const { checked, label } = payload;
            if (checked) {
                  return uniq(state.concat(label));
            }
            if (!checked) {
                  return state.filter(e => e !== label);
            }
      }
      return state;
};
