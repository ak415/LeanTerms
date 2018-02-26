import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import NavbarContainer from './navbar-container';
import Splash from './splash';
import Footer from './footer';
import ContractShowContainer from './contract_show_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import ContractFormContainer from './contract_form_container';
import ProfileContainer from './profile_container';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-div-wrapper">
        <Route path="/" component={NavbarContainer} />
        <Switch>
          <Route exact path="/" component={Splash} />
            <ProtectedRoute path="/profile" component={ProfileContainer}/>
          <ProtectedRoute
            path="/contract/:id"
            component={ContractShowContainer}
          />
          <ProtectedRoute path="/contract" component={ContractFormContainer} />
          <ProtectedRoute path="/profile" component={ProfileContainer} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
