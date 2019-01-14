import { setCurrencyList } from './currencyList';
import { SET_CURRENCY_LIST } from '../config/action-types';

it('Returns an action for setting the currency list', () => {
      expect(setCurrencyList('payload')).toEqual({
            type: SET_CURRENCY_LIST,
            payload: 'payload',
      });
});
