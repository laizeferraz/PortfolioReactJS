import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../images/Logo.png';

class Header extends Component {
  render() {
    return(
      <div className="header-flex">
      <div className="logo-margin header-col">
          <img src={Logo} alt="logo" />
      </div>
      <div>
        <ul className="menu-inline-block header-col">
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Projects">Projects</Link></li>
            <li><Link to="/Resume">Resume</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
        </ul>         
      </div>
        
    </div>

    );
  }
}

export default Header;
