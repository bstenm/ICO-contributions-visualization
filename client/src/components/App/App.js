import React from 'react';
import './App.css';
import { Query } from 'react-apollo';
import SideNav from '../SideNav';
import queries from '../../config/queries';
import DataVisualization from '../DataVisualization';

const App = () => (
      <div className="App">
            <SideNav />
            <div className="App__body">
                  <Query query={queries.contributors}>
                        {({ data, loading, error }) => {
                              if (loading) {
                                    return <div className="loader" />;
                              }
                              if (error) {
                                    return (
                                          <div className="error">
                                                Something went wrong :(
                                          </div>
                                    );
                              }

                              return (
                                    <DataVisualization
                                          data={data.contributors}
                                    />
                              );
                        }}
                  </Query>
            </div>
      </div>
);

export default App;
