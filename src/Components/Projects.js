import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import SunnySpot from '../images/SunnySpotLogo.png';
import Portfolio from '../images/Portfolio1.png';
import Starburger from '../images/Starburger.png';
import Tools from '../images/17Tools.png';
import Web from '../images/WebTechnologies.png';
import Social from '../images/SocialMedia.png';
import Code from '../images/Code.png';
import Plus from '../images/plus.png';

class Projects extends Component {
  render(){
    const projects = [
      { project: SunnySpot, 
        description: 'HTML | CSS | JS | PHP | MySQL',
        path: '1',
        alt: 'SunnySpot Project'},
        {project: Portfolio,
          description: 'HTML | CSS | JS | PHP',
          path: '1',
          alt: 'Portfolio Project'},
            {project: Web,
              description: 'HTML | CSS', 
              path: '1',
              alt: 'Webtheclogies Project'},
              {project: Social,
                description: 'HTML | CSS', 
                path: '1',
                alt: 'Social Media Project'},
                {project: Tools,
                  description: 'PHOTOSHOP | XD', 
                  path: '1',
                  alt: '17 Tools Design'},
                  {project: Starburger,
                    description: 'PHOTOSHOP | XD',
                    path: '1',
                    alt: 'Starburger Design'}
              ];

    return(
      <div className="section2">
      <h2>Portfolio</h2>
      <img className="section2-img" src={Code} alt=""/>
        <Grid className="demo-grid-1">
          {projects.map(cell => <Cell col={4}>
            <div className="gallery__item">
              <a href= {cell.path}>
                <img
                  src={cell.project}
                  alt={cell.alt}
                />
                <div className="gallery__img-overlay">
                  <span>
                  {cell.description}
                  </span>
                  <div className="icon__plus"><img src={Plus} alt="See more"/></div>
                </div>
                
              </a>
            </div>
          </Cell> )}
        </Grid>
      </div>
    )
  }
}

export default Projects;