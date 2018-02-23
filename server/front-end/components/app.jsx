import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import Splash from './splash';

class App extends React.Component{

    constructor(props){
        super(props);

    }
    
    

    render(){
        
        
        
        return (
            <Splash />
        );
    }
}

export default App;