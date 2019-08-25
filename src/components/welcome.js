import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Geeklife from './geek-life';
import Includes from './includes';
import ReactSVG from 'react-svg';
import ReactLogo from '../img/react-logo.svg';
import Form from './form';

class Welcome extends Component {
  render() {
    let {welcomeText} = this.props;
    return (
      <div className="welcome">
        <Geeklife />
        <Includes />
        <Form />
        <code>{welcomeText}</code>
        <ReactSVG src={ReactLogo} className="react-logo-container" />
      </div>
    );
  }
}

Welcome.defaultProps = {
  welcomeText: 'this is default welcome text ;)',
};

Welcome.propTypes = {
  welcomeText: PropTypes.string.isRequired,
};

export default Welcome;
