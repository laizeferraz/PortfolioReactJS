import React, {Component} from 'react';
import arrow from '../images/arrow-down.svg'

class Arrow extends Component {
  render() {
    return (
        <div className="arrow-bounce">             
            <img src={arrow} alt="Scrow down"/>
        </div>
    );
  }
}

export default Arrow;
