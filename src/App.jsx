import React from 'react';
import { connect } from 'react-redux';

import { stashLoad } from './actions';

import logo from './logo.svg';
import './App.css';

const App = props => {

  const { dispatch } = props;

  dispatch(stashLoad());

  return(
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  )
};

const mapStateToProps = () => ({}); 

export default connect(mapStateToProps)(App);