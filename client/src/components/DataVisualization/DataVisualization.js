import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import PieChart from '../PieChart';
import routes from '../../config/routes';
import { formatDataForPieCharts } from '../../libs/dataManipulation';

const DataVisualization = ({ data }) => (
      <div className="DataVisualization">
            <Switch>
                  <Route
                        path={routes.currencyChart}
                        render={() => (
                              <PieChart
                                    data={formatDataForPieCharts(
                                          data,
                                          'currency',
                                    )}
                              />
                        )}
                  />
                  <Route
                        path={routes.home}
                        render={() => (
                              <div className="intro">
                                    {' '}
                                    {data.length} contributors found
                              </div>
                        )}
                  />
            </Switch>
      </div>
);

DataVisualization.defaultProps = {
      data: [],
};

DataVisualization.propTypes = {
      data: PropTypes.array,
};

export default withRouter(DataVisualization);
