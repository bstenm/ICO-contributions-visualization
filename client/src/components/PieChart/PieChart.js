import React from 'react';
import { Pie } from 'react-chartjs';
import PropTypes from 'prop-types';
import PieChartKeys from '../PieChartKeys';
import './PieChart.css';

const PieChart = ({ data }) => (
      <div className="PieChart">
            <PieChartKeys
                  keys={data.map(({ highlight, ...rest }) => ({ ...rest }))}
            />
            <Pie
                  data={data}
                  options={{ animationEasing: 'easeOutSine' }}
                  height="300"
            />
      </div>
);

PieChart.defaultProps = {
      data: [],
};

PieChart.propTypes = {
      data: PropTypes.arrayOf(PropTypes.object),
};

export default PieChart;
