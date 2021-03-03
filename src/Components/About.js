import React, {Component} from 'react';
import CodeWhite from '../images/Code_White.png';

class About extends Component {
  render(){
    return(
      <div className="section3 section3__background">
        <h2>About</h2>
          <img className="section3-img" src={CodeWhite} alt="" />
          <div className="section3__content">
            <p>Based in Sydney, I’m an ex-lawyer that got passionate about coding and design.</p>
            <p>I believe a great website, accessible and focused in the user experience will contribute for your business success.</p>
            <p>So, let’s work together and create a flawless web experience for your clients? Contact me!</p>
          </div>
      </div>
    )
  }
}

export default About;