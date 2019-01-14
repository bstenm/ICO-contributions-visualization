/* eslint-disable import/prefer-default-export */
import { SET_CURRENCY_LIST } from '../config/action-types';

export const setCurrencyList = payload => ({
      type: SET_CURRENCY_LIST,
      payload,
});
