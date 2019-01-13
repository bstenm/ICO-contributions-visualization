import React from 'react';
import { Bar } from 'react-chartjs';
import PropTypes from 'prop-types';

const BarChart = ({ data }) => (
      <div className="BarChart">
            <Bar data={data} width="800" height="400" />
      </div>
);

BarChart.defaultProps = {
      data: [],
};

BarChart.propTypes = {
      data: PropTypes.arrayOf(PropTypes.object),
};

BarChart.propTypes = {};

export default BarChart;
