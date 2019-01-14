import React from 'react';
import { Range } from 'rc-slider';
import PropTypes from 'prop-types';
import cf from '../../config';
import 'rc-slider/assets/index.css';
import './ValueSettingsPanel.css';

const { min } = cf.valueRange;

const ValueSettingsPanel = ({ rangeMax, onChange }) => (
      <div className="ValueSettingsPanel">
            <p>
                  Value range to inspect <br /> (in Satoshi)
            </p>
            <Range
                  min={min}
                  max={rangeMax}
                  defaultValue={[min, rangeMax]}
                  onChange={onChange}
            />
      </div>
);

ValueSettingsPanel.propTypes = {
      rangeMax: PropTypes.number.isRequired,
      onChange: PropTypes.func.isRequired,
};

export default ValueSettingsPanel;
