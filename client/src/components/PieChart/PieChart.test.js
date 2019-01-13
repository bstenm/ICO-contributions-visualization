import React from 'react';
import { shallow } from 'enzyme';
import { Pie } from 'react-chartjs';
import PieChart from './PieChart';
import PieChartKeys from '../PieChartKeys';

let wrapper;
let props;

beforeEach(() => {
      props = {
            data: [
                  {
                        value: 1,
                        label: 'BTC',
                        color: '#F7464A',
                        highlight: '#FF5A5E',
                  },
                  {
                        value: 3,
                        label: 'ETH',
                        color: '#46BFBD',
                        highlight: '#5AD3D1',
                  },
            ],
      };

      wrapper = shallow(<PieChart {...props} />);
});

it('Displays a PieChart component', () => {
      expect(wrapper.find('.PieChart')).toHaveLength(1);
});

// PieChartKeys
it('Displays a PieChartKeys component', () => {
      expect(wrapper.find(PieChartKeys)).toHaveLength(1);
});

// PieChartKeys prop: keys
it('Passes keys to PieChartKeys component', () => {
      expect(wrapper.find(PieChartKeys).props().keys).toEqual([
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
      ]);
});

// Pie
it('Displays a Pie component', () => {
      expect(wrapper.find(Pie)).toHaveLength(1);
});

// Pie prop: data
it('Passes the data as is to Pie component', () => {
      expect(wrapper.find(Pie).props().data).toEqual(props.data);
});
