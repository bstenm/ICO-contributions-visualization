import React from 'react';
import { shallow } from 'enzyme';
import { Checkbox } from 'react-bootstrap';
import CurrencySelection from './CurrencySelection';

jest.mock('../../config', () => ({
      currencyList: ['BTC', 'ETH', 'LTC'],
}));

let wrapper;
let props;

beforeEach(() => {
      props = {
            currencyList: ['BTC', 'ETH'],
            onClickCheckbox: jest.fn(),
      };
      wrapper = shallow(<CurrencySelection {...props} />);
});

it('Displays a CurrencySelection', () => {
      expect(wrapper.find('.CurrencySelection')).toHaveLength(1);
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
