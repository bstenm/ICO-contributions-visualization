import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setValueRange } from '../../actions/valueRange';
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
                        />
                  )
            );
      }
}

ValueSettingsPanelContainer.propTypes = {
      rangeMax: PropTypes.number.isRequired,
      setValueRange: PropTypes.func.isRequired,
};

export default connect(
      ({ valueRange: { max } }) => ({
            rangeMax: max,
      }),
      { setValueRange },
)(ValueSettingsPanelContainer);
