import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';


class App extends React.Component{

    constructor(props){
        super(props);

    }

    render(){
        return (
            <div>
                <h1>Hello World</h1>
            </div>
        );
    }
}

export default App;