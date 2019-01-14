import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setValueRange } from '../../actions/valueRange';
import { setCurrencyList } from '../../actions/currencyList';
import ValueSettingsPanel from './ValueSettingsPanel';
import cf from '../../config';

export class ValueSettingsPanelContainer extends React.Component {
      onChange = range => {
            const [min, max] = range;

            // force a minimum range
            if (Math.abs(max - min) > cf.valueRange.minGap) {
                  this.props.setValueRange(range);
            }
      };

      render() {
            return (
                  !!this.props.rangeMax && (
                        <ValueSettingsPanel
                              onChange={this.onChange}
                              rangeMax={this.props.rangeMax}
                              currencyList={this.props.currencyList}
                              onClickCheckbox={this.props.setCurrencyList}
                        />
                  )
            );
      }
}

ValueSettingsPanelContainer.propTypes = {
      rangeMax: PropTypes.number.isRequired,
      currencyList: PropTypes.array.isRequired,
      setValueRange: PropTypes.func.isRequired,
      setCurrencyList: PropTypes.func.isRequired,
};

export default connect(
      ({ valueRange: { max }, currencyList }) => ({
            rangeMax: max,
            currencyList,
      }),
      { setValueRange, setCurrencyList },
)(ValueSettingsPanelContainer);