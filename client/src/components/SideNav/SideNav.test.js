import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import SideNav from './SideNav';
import routes from '../../config/routes';

let wrapper;
let props;

beforeEach(() => {
      props = {};
      wrapper = shallow(<SideNav {...props} />);
});

it('Displays a SideNav component', () => {
      expect(wrapper.find('.SideNav')).toHaveLength(1);
});

// Link: currency
it('Displays a Link component pointing to the currency chart page', () => {
      const links = wrapper
            .find(Link)
            .filterWhere(e => e.props().to === routes.currencyChart);

      expect(links).toHaveLength(1);
});

// Link: currency-value
it('Displays a Link component pointing to the currency-value chart page', () => {
      const links = wrapper
            .find(Link)
            .filterWhere(e => e.props().to === routes.currencyValueChart);

      expect(links).toHaveLength(1);
});
