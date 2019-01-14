import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Checkbox } from 'react-bootstrap';
import cf from '../../config';

const CurrencySelection = ({ currencyList, onClickCheckbox }) => (
      <div className="CurrencySelection">
            <p>Select currencies</p>
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

CurrencySelection.propTypes = {
      currencyList: PropTypes.arrayOf(PropTypes.string).isRequired,
      onClickCheckbox: PropTypes.func.isRequired,
};

export default CurrencySelection;
