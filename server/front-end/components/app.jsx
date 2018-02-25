import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavbarContainer from './navbar-container';
import Splash from './splash';
import Contract from './contract';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavbarContainer />
        <Splash />
        <Switch>
          <Route path="/contract" component={Contract} />
        </Switch>
      </div>
    );
  }
}

export default App;
