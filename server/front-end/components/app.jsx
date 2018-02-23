import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './navbar';
import Contract from './contract';

class App extends React.Component {
  constructor(props) {
    super(props);
  }



    render(){



        return (
            // <Navbar />
            <Contract/>

        );
    }
  }

  


export default App;
