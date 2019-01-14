import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import cf from './config';
import store from './store';

const client = new ApolloClient({
      uri: cf.grapqhQLendPoint,
});

ReactDOM.render(
      <ApolloProvider client={client}>
            <Provider store={store}>
                  <BrowserRouter>
                        <App />
                  </BrowserRouter>
            </Provider>
      </ApolloProvider>,
      document.getElementById('root'),
);
