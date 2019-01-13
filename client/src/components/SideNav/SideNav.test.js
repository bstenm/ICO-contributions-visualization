import React from 'react';
import { shallow } from 'enzyme';
import SideNav from './SideNav';

let wrapper;
let props;

beforeEach(() => {
      props = {};

      wrapper = shallow(<SideNav {...props} />);
});

it('Displays a SideNav component', () => {
      expect(wrapper.find('.SideNav')).toHaveLength(1);
});
