import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavbarContainer from './navbar-container';
import Splash from './splash';
import Contract from './contract';
import Footer from './footer';


class App extends React.Component {
  constructor(props) {
    super(props);
  }



    render(){



        return (
            <div>
                <NavbarContainer />
                <Splash />
                <Footer />

            </div>
        );
    }
  }




export default App;
