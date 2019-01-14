import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { MockedProvider } from 'react-apollo/test-utils';
import { Provider } from 'react-redux';
import wait from 'waait';
import App from './App';
import SideNav from '../SideNav';
import queries from '../../config/queries';
import store from '../../store';

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
                                    address:
                                          '0x5badec6c7fa780515ffb2f9ce0451cf7a13b2948',
                              },
                              {
                                    value: 952,
                                    currency: 'ETH',
                                    address:
                                          '0x2380dc19dc6df5040310a3504cb7e5825f5013b0',
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
                  <Provider store={store}>
                        <BrowserRouter>
                              <App {...props} />
                        </BrowserRouter>
                  </Provider>
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
                  <Provider store={store}>
                        <BrowserRouter>
                              <App />
                        </BrowserRouter>
                  </Provider>
            </MockedProvider>,
      );

      // wait for response from server
      await wait(0);

      expect(wrapper.find('.App').text()).toContain('Something went wrong');
});
