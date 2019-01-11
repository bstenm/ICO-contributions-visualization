import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import cf from './config';

const client = new ApolloClient({
      uri: cf.grapqhQLendPoint,
});

ReactDOM.render(
      <ApolloProvider client={client}>
            <BrowserRouter>
                  <App />
            </BrowserRouter>
      </ApolloProvider>,
      document.getElementById('root'),
);
