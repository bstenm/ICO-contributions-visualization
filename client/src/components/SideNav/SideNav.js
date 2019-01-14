import React from 'react';
import './SideNav.css';
import { Link } from 'react-router-dom';
import routes from '../../config/routes';
import ValueSettingsPanel from '../ValueSettingsPanel';

const SideNav = () => (
      <div className="SideNav">
            <h3>Visualization</h3>
            <ul>
                  <li>
                        <Link to={routes.currencyChart}>by currency</Link>
                  </li>
                  <li>
                        <Link to={routes.currencyValueChart}>
                              by currency/value
                        </Link>
                  </li>
            </ul>
            <ValueSettingsPanel />
      </div>
);

export default SideNav;
