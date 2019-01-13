import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import PieChart from '../PieChart';
import BarChart from '../BarChart';
import routes from '../../config/routes';
import {
      formatDataForPieCharts,
      formatDataForCurrencyValueCharts,
} from '../../libs/dataManipulation';

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
                        path={routes.currencyValueChart}
                        render={() => (
                              <BarChart
                                    data={formatDataForCurrencyValueCharts(
                                          data,
                                    )}
                              />
                        )}
                  />
                  <Route
                        path={routes.home}
                        render={() => (
                              <div className="big-message">
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

export default DataVisualization;
