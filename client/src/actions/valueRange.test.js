import { setRangeMax, setValueRange } from './valueRange';
import { SET_RANGE_MAX, SET_VALUE_RANGE } from '../config/action-types';

describe('setRangeMax', () => {
      it('Returns an action for setting the range max', () => {
            expect(setRangeMax('payload')).toEqual({
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
