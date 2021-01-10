import React from 'react';
import { Link } from 'react-router-dom';

import './App-a-top-header.css';

const AppATopHeader = () => {
    return (
      <div>
        <header>
          <nav>
            <input type="checkbox" id="checkbox_menu" />
            <label htmlFor="checkbox_menu">
                <ul className="menu touch">
                    <li className="logo a"><strong>AlexGrig</strong></li>
                    <li className="a"><Link to="/">Главная</Link></li>
                    <li className="a"><Link to="/about">О проекте</Link></li>
                </ul>
                <span className="toggle">☰</span>
            </label>
          </nav>
        </header>      
      </div>
    )
}

export default AppATopHeader;