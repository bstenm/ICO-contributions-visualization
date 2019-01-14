import React from 'react';
import { Range } from 'rc-slider';
import { shallow } from 'enzyme';
import { Checkbox } from 'react-bootstrap';
import ValueSettingsPanel from './ValueSettingsPanel';

jest.mock('../../config', () => ({
      valueRange: {
            min: 100,
      },
      currencyList: ['BTC', 'ETH', 'LTC'],
}));

let wrapper;
let props;

beforeEach(() => {
      props = {
            rangeMax: 3000,
            currencyList: ['BTC', 'ETH'],
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

// Checkbox
it('Displays a Checkbox component for each item in the currency list set in the config', () => {
      expect(wrapper.find(Checkbox)).toHaveLength(3);
});

// Checkbox prop: defaultChecked
it('Passes defaultChecked set to whether currency is present in the redux store array to the Checkbox components', () => {
      const checkbox = i => wrapper.find(Checkbox).at(i);

      // for ETH
      expect(checkbox(1).props().defaultChecked).toEqual(true);
      // for LTC
      expect(checkbox(2).props().defaultChecked).toEqual(false);
});

//  Checkbox prop: onClick
it('Passes a cb prop to handle checkboxes click to Range component', () => {
      wrapper
            .find(Checkbox)
            .at(1)
            .props()
            .onClick({ target: { checked: true } });

      expect(props.onClickCheckbox).toHaveBeenCalledTimes(1);
      expect(props.onClickCheckbox).toHaveBeenCalledWith({
            checked: true,
            label: 'ETH',
      });
});
