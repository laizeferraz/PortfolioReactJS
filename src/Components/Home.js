import React, {Component} from 'react';
import Sidebar from './Sidebar';
import Arrow from './Arrow';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

class Home extends Component {
  render(){
    return(
      <div>
      <div className="wrapper">
          <Sidebar />
          <h1>Hi, I'm Laize<br /> and I'm a Web Developer.</h1>
          <p>Based in Sydney, I’m an ex-lawyer that got passionate about coding and design.</p>
          <p>I believe a great website, accessible and focused in the user experience will contribute for your business success.</p>
          <p>So, let’s work together and create a flawless web experience for your clients? </p>
          <p>Scrow down!</p>
        <Arrow />  
      </div>
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    
    );
  }
}

export default Home;