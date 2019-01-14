import React from 'react';
import { Range } from 'rc-slider';
import PropTypes from 'prop-types';
import cf from '../../config';
import CurrencySelection from '../CurrencySelection';
import 'rc-slider/assets/index.css';
import './ValueSettingsPanel.css';

const { min } = cf.valueRange;

const ValueSettingsPanel = ({
      range: [minValue, maxValue],
      rangeMax,
      onChange,
      onClickCheckbox,
      currencyList,
}) => (
      <div className="ValueSettingsPanel">
            <p>
                  Value range (in Satoshi) <br /> [{minValue}, {maxValue}]
            </p>
            <Range
                  min={min}
                  max={rangeMax}
                  defaultValue={[min, rangeMax]}
                  onChange={onChange}
            />
            <CurrencySelection
                  currencyList={currencyList}
                  onClickCheckbox={onClickCheckbox}
            />
      </div>
);

ValueSettingsPanel.propTypes = {
      range: PropTypes.arrayOf(PropTypes.number).isRequired,
      rangeMax: PropTypes.number.isRequired,
      onChange: PropTypes.func.isRequired,
      currencyList: PropTypes.array.isRequired,
      onClickCheckbox: PropTypes.func.isRequired,
};

export default ValueSettingsPanel;
