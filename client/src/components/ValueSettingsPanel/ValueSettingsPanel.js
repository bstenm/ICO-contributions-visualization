import React from 'react';
import { Range } from 'rc-slider';
import PropTypes from 'prop-types';
import { FormGroup, Checkbox } from 'react-bootstrap';
import cf from '../../config';
import 'rc-slider/assets/index.css';
import './ValueSettingsPanel.css';

const { min } = cf.valueRange;

const ValueSettingsPanel = ({
      rangeMax,
      onChange,
      onClickCheckbox,
      currencyList,
}) => (
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
            <FormGroup>
                  {cf.currencyList.map(label => (
                        <Checkbox
                              key={label}
                              defaultChecked={currencyList.includes(label)}
                              onClick={({ target: { checked } }) =>
                                    onClickCheckbox({ label, checked })
                              }
                              inline
                        >
                              {label}
                        </Checkbox>
                  ))}
            </FormGroup>
      </div>
);

ValueSettingsPanel.propTypes = {
      rangeMax: PropTypes.number.isRequired,
      onChange: PropTypes.func.isRequired,
      currencyList: PropTypes.array.isRequired,
      onClickCheckbox: PropTypes.func.isRequired,
};

export default ValueSettingsPanel;
