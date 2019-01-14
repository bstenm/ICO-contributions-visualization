import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';
import PieChart from '../PieChart';
import BarChart from '../BarChart';
import routes from '../../config/routes';
import DataVisualization from './DataVisualization';
import cf from '../../config';

const data = [
      {
            value: 3056,
            currency: 'BTC',
      },
      {
            value: 952,
            currency: 'ETH',
      },
];

let wrapper;
let props;

beforeEach(() => {
      props = { data };
      wrapper = shallow(<DataVisualization {...props} />);
});

// DataVisualization
it('Displays a DataVisualization component', () => {
      expect(wrapper.find('.DataVisualization')).toHaveLength(1);
});

// Route to homepage
it('Displays a route pointing to the homepage', () => {
      const route = wrapper
            .find(Route)
            .filterWhere(e => e.props().path === routes.home);

      expect(route).toHaveLength(1);

      const introWrapper = shallow(route.props().render());

      expect(introWrapper.find('.big-message')).toHaveLength(1);
      expect(introWrapper.find('.big-message').text()).toContain('2');
});

// Route to pie chart
it('Displays a route pointing to the currency chart page', () => {
      const route = wrapper
            .find(Route)
            .filterWhere(e => e.props().path === routes.currencyChart);

      const currencyPieData = [
            {
                  color: '#F7464A',
                  highlight: '#FF5A5E',
                  label: 'BTC',
                  value: 1,
            },
            {
                  color: '#46BFBD',
                  highlight: '#5AD3D1',
                  label: 'ETH',
                  value: 1,
            },
      ];

      expect(route).toHaveLength(1);
      expect(route.props().render()).toEqual(
            <PieChart data={currencyPieData} />,
      );
});

// Route to bar chart
it('Displays a route pointing to the currency/value chart page', () => {
      const route = wrapper
            .find(Route)
            .filterWhere(e => e.props().path === routes.currencyValueChart);

      const currencyValueData = {
            labels: ['BTC', 'ETH'],
            datasets: [
                  Object.assign({}, { data: [3056, 952] }, cf.barChartOptions),
            ],
      };

      expect(route).toHaveLength(1);
      expect(route.props().render()).toEqual(
            <BarChart data={currencyValueData} />,
      );
});
