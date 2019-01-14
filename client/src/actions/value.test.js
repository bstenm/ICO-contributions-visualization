import { setMaxValue, setValueRange } from './value';
import { SET_RANGE_MAX, SET_VALUE_RANGE } from '../config/action-types';

describe('setMaxValue', () => {
      it('Returns an action for setting the range max', () => {
            expect(setMaxValue('payload')).toEqual({
                  type: SET_RANGE_MAX,
                  payload: 'payload',
            });
      });
});

describe('setValueRange', () => {
      it('Returns an action for setting the value range', () => {
            expect(setValueRange('payload')).toEqual({
                  type: SET_VALUE_RANGE,
                  payload: 'payload',
            });
      });
});
