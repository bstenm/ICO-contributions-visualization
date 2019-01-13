import React from 'react';
import { shallow } from 'enzyme';
import { Bar } from 'react-chartjs';
import BarChart from './BarChart';

let wrapper;
let props;

beforeEach(() => {
      props = { data: 'some chart data' };
      wrapper = shallow(<BarChart {...props} />);
});

// BarChart
it('Displays a BarChart', () => {
      expect(wrapper.find('.BarChart')).toHaveLength(1);
});

// Bar
it('Displays a Bar component', () => {
      expect(wrapper.find(Bar)).toHaveLength(1);
});

// Bar prop: data
it('Passes data to the Bar component', () => {
      expect(wrapper.find(Bar).props().data).toEqual('some chart data');
});
