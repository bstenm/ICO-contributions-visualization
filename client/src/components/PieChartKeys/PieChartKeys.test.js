import React from 'react';
import { shallow } from 'enzyme';
import PieChartKeys from './PieChartKeys';

let wrapper;
let props;

beforeEach(() => {
      props = {
            keys: [
                  {
                        color: '#F7464A',
                        label: 'BTC',
                        value: 1,
                  },
                  {
                        color: '#46BFBD',
                        label: 'ETH',
                        value: 3,
                  },
            ],
      };

      wrapper = shallow(<PieChartKeys {...props} />);
});

it('Displays a PieChartKeys component', () => {
      expect(wrapper.find('.PieChartKeys')).toHaveLength(1);
});

// key
it('Displays a key that displays a label and value for each entry in the data passed', () => {
      const key = wrapper.find('.key');
      expect(key).toHaveLength(2);
      // label
      expect(key.at(1).text()).toContain('ETH');
      // value
      expect(key.at(1).text()).toContain('3');
});
