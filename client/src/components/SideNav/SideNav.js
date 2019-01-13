import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../config/routes';
import './SideNav.css';

const SideNav = () => (
      <div className="SideNav">
            <h3>Visualization</h3>
            <ul>
                  <li>
                        <Link to={routes.currencyChart}>by currency</Link>
                  </li>
            </ul>
      </div>
);

export default SideNav;
