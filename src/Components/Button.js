import React, {Component} from 'react';
// import Arrow from '../images/Arrow.svg';

class Button extends Component {
  render() {
    return (
        <div className="arrow-button">
          <a data-scroll href="#full">
            <div className="arrow"></div>
          </a>
        </div>
    );
  }
}

export default Button;
