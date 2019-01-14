import React from 'react';
import { Range } from 'rc-slider';
import { shallow } from 'enzyme';
import ValueSettingsPanel from './ValueSettingsPanel';

jest.mock('../../config', () => ({
      valueRange: {
            min: 100,
      },
}));

let wrapper;
let props;

beforeEach(() => {
      props = {
            rangeMax: 3000,
            onChange: jest.fn(),
            onClickCheckbox: jest.fn(),
      };
      wrapper = shallow(<ValueSettingsPanel {...props} />);
});

it('Displays a ValueSettingsPanel', () => {
      expect(wrapper.find('.ValueSettingsPanel')).toHaveLength(1);
});

it('Displays a Range component', () => {
      expect(wrapper.find(Range)).toHaveLength(1);
});

// Range prop: min
it('Passes the min range value to Range component', () => {
      expect(wrapper.find(Range).props().min).toEqual(100);
});

// Range prop: max
it('Passes the max range value to Range component', () => {
      expect(wrapper.find(Range).props().max).toEqual(3000);
});

// Range prop: defaultValue
it('Passes the default values for the slider to Range component', () => {
      expect(wrapper.find(Range).props().defaultValue).toEqual([100, 3000]);
});

// Range prop: onChange
it('Passes a cb prop to handle the range value change to Range component', () => {
      wrapper
            .find(Range)
            .props()
            .onChange('arg');

      expect(props.onChange).toHaveBeenCalledTimes(1);
      expect(props.onChange).toHaveBeenCalledWith('arg');
});
