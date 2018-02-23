import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './navbar';
import Contract from './contract';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

<<<<<<< HEAD
    constructor(props){
        super(props);

    }



    render(){



        return (
            // <Navbar />
            <Contract/>

        );
    }
=======
  render() {
    return <Navbar />;
  }
>>>>>>> a406d86a23044c6e7bd739e35a51ac4422626829
}

export default App;
