import React from 'react';
import App from './App';

let wrapper;
let props;

beforeEach(() => {
      props = {};
      wrapper = shallow(<App {...props} />);
});

it('Displays a App component', () => {
      expect(wrapper.find('.App')).toHaveLength(1);
});
