import React from 'react';
import { shallow } from 'enzyme';
import DataVisualization from './DataVisualization';
import { DataVisualizationContainer } from './DataVisualizationContainer';

jest.mock('../../libs/dataManipulation', () => ({
      convertValueToSatoshi: () => [
            {
                  value: 3000,
                  currency: 'BTC',
            },
            {
                  value: 1500,
                  currency: 'ETH',
            },
            {
                  value: 20000,
                  currency: 'LTH',
            },
      ],
}));

const data = [
      {
            value: 3056,
            currency: 'BTC',
      },
      {
            value: 9052,
            currency: 'ETH',
      },
      {
            value: 100002,
            currency: 'LTH',
      },
];

describe('(Container) DataVisualization', () => {
      let props;
      let wrapper;

      beforeEach(() => {
            props = {
                  data,
                  range: [1000, 3000],
                  currencyList: ['BTC', 'ETH'],
                  setMaxValue: jest.fn(),
            };
            wrapper = shallow(<DataVisualizationContainer {...props} />);
      });

      it('Calls an action to set the range max in redux store', () => {
            expect(props.setMaxValue).toHaveBeenCalledTimes(1);
            expect(props.setMaxValue).toHaveBeenCalledWith(20000);
      });

      it('Displays a DataVisualization component', () => {
            expect(wrapper.find(DataVisualization)).toHaveLength(1);
      });

      it('Passes the data filtered through the range and currency filters to the DataVisualization component', () => {
            expect(wrapper.find(DataVisualization).props(data)).toEqual({
                  data: [
                        { currency: 'BTC', value: 3000 },
                        { currency: 'ETH', value: 1500 },
                  ],
            });
      });

      it('Does not display a DataVisualization component if no data left for the range selected', () => {
            wrapper.setProps({ range: [0, 200] });

            expect(wrapper.find(DataVisualization)).toHaveLength(0);
      });
});
