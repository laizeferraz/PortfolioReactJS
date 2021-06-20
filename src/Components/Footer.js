import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import privacy from '../images/privacy.svg'

class Footer extends Component {
  render(){
    return(
      <div className="footer__background footer-layout">
      <div className="footer-flex">
        <ul className="menu-footer-inline footer-icon">
            <li><Link to="/Privacy"><img src={privacy} alt='Pricacy Policy'/></Link></li>
        </ul>
      </div>  
      <div className="footer-center">
        <span>All rights reserved. &copy; Laize Ferraz</span>
      </div>              
      </div>
    )
  }

}

export default Footer;