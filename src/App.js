import {hot} from 'react-hot-loader/root';
import React, {Component} from 'react';
import Welcome from './components/welcome';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Welcome welcomeText="React Here Gang!!" />
      </React.Fragment>
    );
  }
}

export default hot(App);
