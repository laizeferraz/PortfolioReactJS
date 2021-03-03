import React, {Component} from 'react';
import resume from "../images/resume.pdf";
import cvIcon from '../images/cv-icon.svg';
import linkedInIcon from '../images/linkedin-icon.svg';
import githubIcon from '../images/github-icon.svg';

class Sidebar extends Component {
  render() {
    return (
      
      <div className="float-icons"> 
        <a href={resume} target="_blank" rel="noopener noreferrer"><img className='float-cv' src={cvIcon} alt='Resume Icon'/> </a>
      
      <div className="white-line"></div>
        <a href="http://github.com/laizeferraz" target="_blank" rel="noopener noreferrer"><img className='float-gh' src={githubIcon} alt='GitHub Icon'/> </a>   
        
      <div className="white-line"></div>    
        <a href="http://linkedin.com/in/laize-ferraz" target="_blank" rel="noopener noreferrer"><img className='float-in' src={linkedInIcon} alt='LinkendIn Icon'/></a> 
      </div>                                 
    );
  }
}

export default Sidebar;
