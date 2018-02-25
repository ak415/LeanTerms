import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import NavbarContainer from './navbar-container';
import Splash from './splash';
import Contract from './contract';
import Footer from './footer';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-div-wrapper">
        <Route path="/" component={NavbarContainer} />
        <Switch>
          <Route path="/contract" component={Contract} />
          <Route exact path="/" component={Splash} />
          <Redirect to="/" />
        </Switch>
        <Route path="/" component={Footer} />
      </div>
    );
  }
}

export default App;
