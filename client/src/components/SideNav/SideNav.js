import React from 'react';
import './SideNav.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Glyphicon } from 'react-bootstrap';
import routes from '../../config/routes';
import ValueSettingsPanel from '../ValueSettingsPanel';

// Has access to location as we wrapped it iwith "withRouter" in the index file
const SideNav = ({ location: { pathname } }) => (
      <div className="SideNav">
            <div className="SideNav__top-panel">
                  <h3>Visualization</h3>
                  <div className="SideNav_links">
                        <ul>
                              <li>
                                    <Link to={routes.home}>
                                          {pathname === routes.home && (
                                                <Glyphicon
                                                      glyph="triangle-right"
                                                      className="icon"
                                                />
                                          )}{' '}
                                          total number
                                    </Link>
                              </li>
                              <li>
                                    <Link to={routes.currencyChart}>
                                          {pathname ===
                                                routes.currencyChart && (
                                                <Glyphicon
                                                      glyph="triangle-right"
                                                      className="icon"
                                                />
                                          )}{' '}
                                          by currency
                                    </Link>
                              </li>
                              <li>
                                    <Link to={routes.currencyValueChart}>
                                          {pathname ===
                                                routes.currencyValueChart && (
                                                <Glyphicon
                                                      glyph="triangle-right"
                                                      className="icon"
                                                />
                                          )}{' '}
                                          by currency/value
                                    </Link>
                              </li>
                        </ul>
                  </div>
            </div>
            <ValueSettingsPanel />
      </div>
);

SideNav.propTypes = {
      location: PropTypes.shape({
            pathname: PropTypes.string.isRequired,
      }).isRequired,
};

export default SideNav;
