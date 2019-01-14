import React from 'react';
import { Range } from 'rc-slider';
import { shallow } from 'enzyme';
import ValueSettingsPanel from './ValueSettingsPanel';
import CurrencySelection from '../CurrencySelection';

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
            range: [2345, 10567],
            rangeMax: 30000,
            currencyList: ['BTC', 'ETH'],
            onChange: jest.fn(),
            onClickCheckbox: jest.fn(),
      };
      wrapper = shallow(<ValueSettingsPanel {...props} />);
});

it('Displays a ValueSettingsPanel', () => {
      expect(wrapper.find('.ValueSettingsPanel')).toHaveLength(1);
});

// the range being selected
it('Displays a the range being selected component', () => {
      expect(wrapper.find('.ValueSettingsPanel').text()).toContain(2345);
      expect(wrapper.find('.ValueSettingsPanel').text()).toContain(10567);
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
      expect(wrapper.find(Range).props().max).toEqual(30000);
});

// Range prop: defaultValue
it('Passes the default values for the slider to Range component', () => {
      expect(wrapper.find(Range).props().defaultValue).toEqual([100, 30000]);
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

// CurrencySelection
it('Displays a CurrencySelection component', () => {
      expect(wrapper.find(CurrencySelection)).toHaveLength(1);
});

// CurrencySelection prop: currencyList
it('Passes currencyList to CurrencySelection component', () => {
      expect(wrapper.find(CurrencySelection).props().currencyList).toEqual([
            'BTC',
            'ETH',
      ]);
});

// CurrencySelection prop: onClickCheckbox
it('Passes a cb prop to handle the checkbox click event to CurrencySelection component', () => {
      wrapper
            .find(CurrencySelection)
            .props()
            .onClickCheckbox('arg');

      expect(props.onClickCheckbox).toHaveBeenCalledTimes(1);
      expect(props.onClickCheckbox).toHaveBeenCalledWith('arg');
});
