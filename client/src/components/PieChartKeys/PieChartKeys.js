import React from 'react';
import PropTypes from 'prop-types';
import './PieChartKeys.css';

const PieChartKeys = ({ keys }) => (
      <div className="PieChartKeys">
            {keys.map(({ label, color, value }) => (
                  <div key={label} className="key">
                        <div
                              className="PieChartKeys__color"
                              style={{ background: color }}
                        />
                        <div className="PieChartKeys__label">
                              {label} ({value})
                        </div>
                  </div>
            ))}
      </div>
);

PieChartKeys.propTypes = {
      keys: PropTypes.array.isRequired,
};

export default PieChartKeys;
