import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import Splash from './splash';
import Contract from './contract.jsx';

class App extends React.Component{

    constructor(props){
        super(props);

    }



    render(){



        return (
          <div>
            <Splash />
            <Contract />
          </div>
        );
    }
}

export default App;
