import React, {Component} from 'react';
import Geeklife from './geek-life';
import ReactSVG from 'react-svg';
import ReactLogo from '../img/react-logo.svg';

class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
        <Geeklife />
        <code>React Here Gang!</code>
        <ReactSVG src={ReactLogo} className="react-logo-container" />
      </div>
    );
  }
}

export default Welcome;
