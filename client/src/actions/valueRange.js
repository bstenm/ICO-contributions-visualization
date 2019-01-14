/* eslint-disable import/prefer-default-export */
import { SET_RANGE_MAX, SET_VALUE_RANGE } from '../config/action-types';

export const setRangeMax = payload => ({
      type: SET_RANGE_MAX,
      payload,
});

export const setValueRange = payload => ({
      type: SET_VALUE_RANGE,
      payload,
});
