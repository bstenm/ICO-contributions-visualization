import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { MockedProvider } from 'react-apollo/test-utils';
import wait from 'waait';
import App from './App';
import SideNav from '../SideNav';
import queries from '../../config/queries';

const mocks = [
      {
            request: {
                  query: queries.contributors,
                  variables: {},
            },
            result: {
                  data: {
                        contributors: [
                              {
                                    value: 3056,
                                    currency: 'BTC',
                              },
                              {
                                    value: 952,
                                    currency: 'ETH',
                              },
                        ],
                  },
            },
      },
];

const mocksError = [
      {
            request: {
                  query: queries.contributors,
                  variables: {},
            },
            error: new Error('Error'),
      },
];

let wrapper;
let props;

beforeEach(() => {
      props = {};
      wrapper = mount(
            <MockedProvider mocks={mocks} addTypename={false}>
                  <BrowserRouter>
                        <App {...props} />
                  </BrowserRouter>
            </MockedProvider>,
      );
});

it('Displays a App component', () => {
      expect(wrapper.find('.App')).toHaveLength(1);
});

// SideNav
it('Displays a SideNav component', () => {
      expect(wrapper.find(SideNav)).toHaveLength(1);
});

// Loader
it('Displays a loader until the server responds', () => {
      expect(wrapper.find('.App').find('.loader')).toHaveLength(1);
});

// Success
it('Displays a the number of contributors found', async () => {
      // wait for response from server
      await wait(0);
      expect(wrapper.find('.App').text()).toContain('2');
});

// Error
it('Displays an error message if the server returned an error', async () => {
      wrapper = mount(
            <MockedProvider mocks={mocksError} addTypename={false}>
                  <BrowserRouter>
                        <App />
                  </BrowserRouter>
            </MockedProvider>,
      );
      // wait for response from server
      await wait(0);

      expect(wrapper.find('.App').text()).toContain('Something went wrong');
});
