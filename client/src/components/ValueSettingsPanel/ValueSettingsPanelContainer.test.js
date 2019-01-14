import React from 'react';
import { shallow } from 'enzyme';
import ValueSettingsPanel from './ValueSettingsPanel';
import { ValueSettingsPanelContainer } from './ValueSettingsPanelContainer';

jest.mock('../../config', () => ({
      valueRange: {
            minGap: 100,
      },
}));

let props;
let wrapper;

beforeEach(() => {
      props = {
            range: [125, 2454],
            rangeMax: 3000,
            currencyList: ['BTC', 'ETH'],
            setValueRange: jest.fn(),
            setCurrencyList: jest.fn(),
      };
      wrapper = shallow(<ValueSettingsPanelContainer {...props} />);
});

it('Does not display anything if no rangeMax passed yet', () => {
      wrapper.setProps({ rangeMax: 0 });
      expect(wrapper.find(ValueSettingsPanel)).toHaveLength(0);
});

it('Displays a ValueSettingsPanel component', () => {
      expect(wrapper.find(ValueSettingsPanel)).toHaveLength(1);
});

//  prop: range
it('Passes the range selected to ValueSettingsPanel component', () => {
      expect(wrapper.find(ValueSettingsPanel).props().range).toEqual([
            125,
            2454,
      ]);
});

//  prop: rangeMax
it('Passes the range max selected to ValueSettingsPanel component', () => {
      expect(wrapper.find(ValueSettingsPanel).props().rangeMax).toEqual(3000);
});

//  prop: currenList
it('Passes the currency list selected to ValueSettingsPanel component', () => {
      expect(wrapper.find(ValueSettingsPanel).props().currencyList).toEqual([
            'BTC',
            'ETH',
      ]);
});

// ValueSettingsPanel prop: onChange
it('Calls an action to set the value range when one is selected', () => {
      wrapper
            .find(ValueSettingsPanel)
            .props()
            .onChange([100, 2000]);

      expect(props.setValueRange).toHaveBeenCalledTimes(1);
      expect(props.setValueRange).toHaveBeenCalledWith([100, 2000]);
});

// ValueSettingsPanel prop: onChange
it('Does not call the action to set the value range when the range is inferior to min limit', () => {
      wrapper
            .find(ValueSettingsPanel)
            .props()
            .onChange([100, 150]);

      expect(props.setValueRange).toHaveBeenCalledTimes(0);
});

//  prop: onClickCheckbox
it('Calls the action to set currency list to ValueSettingsPanel component', () => {
      wrapper
            .find(ValueSettingsPanel)
            .props()
            .onClickCheckbox('arg');

      expect(props.setCurrencyList).toHaveBeenCalledTimes(1);
      expect(props.setCurrencyList).toHaveBeenCalledWith('arg');
});
