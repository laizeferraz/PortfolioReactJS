import React, {Component} from 'react';
import Code from '../images/Code.png';
import ContactForm from './ContactForm';

class Contact extends Component {
  render(){
    return(
      <div class="section4">
      <h2>Contact</h2>
      <img className="section4-img" src={Code} alt="" />
      <div>
        <ContactForm />
      </div>

      </div>
    )
  }
}

export default Contact;