import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './navbar';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Navbar />;
  }
}

export default App;
