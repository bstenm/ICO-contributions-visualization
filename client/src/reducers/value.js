import { SET_RANGE_MAX, SET_VALUE_RANGE } from '../config/action-types';

const initialState = {
      max: 0,
      range: [],
};

export default (state = initialState, { type, payload }) => {
      switch (type) {
            case SET_RANGE_MAX:
                  return { ...state, max: payload, range: [0, payload] };

            case SET_VALUE_RANGE:
                  return { ...state, range: payload };

            default:
                  return state;
      }
};
