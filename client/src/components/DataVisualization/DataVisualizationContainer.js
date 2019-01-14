import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import maxBy from 'lodash/maxBy';
import { withRouter } from 'react-router-dom';
import { setMaxValue } from '../../actions/value';
import { setCurrencyList } from '../../actions/currencyList';
import DataVisualization from './DataVisualization';
import { convertValueToSatoshi } from '../../libs/dataManipulation';

export class DataVisualizationContainer extends React.Component {
      constructor(props) {
            super(props);

            // we replace all values in the data set with their correponding value in satoshi
            this.set = convertValueToSatoshi(this.props.data);

            // set the max value of satoshi found in the set in the redux store
            this.props.setMaxValue(
                  Math.round(maxBy(this.set, o => o.value).value),
            );
      }

      render() {
            const [min, max] = this.props.range;

            // 1.filter out the items whose currency in not selected
            // 2.filter out the items whose values are outside the range set
            const set = this.set.filter(
                  e =>
                        this.props.currencyList.includes(e.currency) &&
                        e.value >= min &&
                        e.value <= max,
            );

            return !set.length ? (
                  <div className="big-message">No data found</div>
            ) : (
                  <DataVisualization data={set} />
            );
      }
}

DataVisualizationContainer.defaultProps = {
      data: [],
};

DataVisualizationContainer.propTypes = {
      data: PropTypes.array,
      range: PropTypes.array.isRequired,
      currencyList: PropTypes.array.isRequired,
      setMaxValue: PropTypes.func.isRequired,
};

export default withRouter(
      connect(
            ({ value: { range }, currencyList }) => ({
                  range,
                  currencyList,
            }),
            { setMaxValue, setCurrencyList },
      )(DataVisualizationContainer),
);
