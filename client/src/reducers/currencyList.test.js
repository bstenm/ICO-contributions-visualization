import reducer from './currencyList';
import { SET_CURRENCY_LIST } from '../config/action-types';

it('Returns the initial state set in config if action type is unknown', () => {
      expect(
            reducer(['BTC', 'ETH'], {
                  type: 'UNKNOWN',
                  payload: { checked: true, label: 'LTC' },
            }),
      ).toEqual(['BTC', 'ETH']);
});

it('Adds the new currency in the list if checked is true', () => {
      expect(
            reducer(['BTC', 'ETH'], {
                  type: SET_CURRENCY_LIST,
                  payload: { checked: true, label: 'LTC' },
            }),
      ).toEqual(['BTC', 'ETH', 'LTC']);
});

it('Removes a currency from the list if checked is false', () => {
      expect(
            reducer(['BTC', 'ETH'], {
                  type: SET_CURRENCY_LIST,
                  payload: { checked: false, label: 'ETH' },
            }),
      ).toEqual(['BTC']);
});
