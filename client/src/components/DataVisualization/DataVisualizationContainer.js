import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import maxBy from 'lodash/maxBy';
import { withRouter } from 'react-router-dom';
import { setRangeMax } from '../../actions/valueRange';
import DataVisualization from './DataVisualization';
import { convertValueToSatoshi } from '../../libs/dataManipulation';

export class DataVisualizationContainer extends React.Component {
      constructor(props) {
            super(props);

            // we replace all values in the data set with their correponding value in satoshi
            this.set = convertValueToSatoshi(this.props.data);

            // set the max value of satoshi found in the set in the redux store
            this.props.setRangeMax(maxBy(this.set, o => o.value).value);
      }

      render() {
            const [min, max] = this.props.range;

            // 1.filter out the items whose currency in not selected
            // 2.filter out the items whose values are outside the range set
            const set = this.set.filter(e => e.value >= min && e.value <= max);

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
      setRangeMax: PropTypes.func.isRequired,
};

export default withRouter(
      connect(
            ({ valueRange: { range } }) => ({
                  range,
            }),
            { setRangeMax },
      )(DataVisualizationContainer),
);
