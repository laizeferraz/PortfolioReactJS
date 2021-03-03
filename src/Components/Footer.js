import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import resume from "../images/resume.pdf";

class Footer extends Component {
  render(){
    return(
      <div className="footer__background footer-flex">
      <div>
        <ul className="menu-footer-inline">
            <li><a href={resume} target="_blank" rel="noopener noreferrer">Resume</a></li>
            <li><Link to="/Privacy">Privacy</Link></li>
        </ul> 
      </div>  
      <div>
        <span>All rights reserved. &copy; Laize Ferraz</span>
      </div>              
      </div>
    )
  }

}

export default Footer;