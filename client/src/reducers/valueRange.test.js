import reducer from './valueRange';
import { SET_RANGE_MAX, SET_VALUE_RANGE } from '../config/action-types';

it('Returns the state unchanged if action type is unknown', () => {
      expect(
            reducer(
                  {
                        max: 3000,
                        range: [100, 2000],
                  },
                  {
                        type: 'UNKNOWN',
                        payload: 2100,
                  },
            ),
      ).toEqual({
            max: 3000,
            range: [100, 2000],
      });
});

it('Sets the new range max', () => {
      expect(
            reducer(
                  {
                        max: 3000,
                        range: [100, 2000],
                  },
                  {
                        type: SET_RANGE_MAX,
                        payload: 2100,
                  },
            ),
      ).toEqual({
            max: 2100,
            range: [0, 2100],
      });
});

it('Sets the new value range', () => {
      expect(
            reducer(
                  {
                        max: 3000,
                        range: [100, 2000],
                  },
                  {
                        type: SET_VALUE_RANGE,
                        payload: [200, 230],
                  },
            ),
      ).toEqual({
            max: 3000,
            range: [200, 230],
      });
});
