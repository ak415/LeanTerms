import React from 'react';

class Splash extends  React.Component{
    constructor(props){
        super(props);
    }
    
    
    render(){
        return(  
          <ul className="homepage-intro">
              <li>
                <h1 className="welcome-page-message">Lease Contracts</h1>
                <h2 id="redefined" className="welcome-page-message">Redefined</h2>
              </li>
              <li>
                <p >Create, share, and sign a free customized lease contract in minutes.</p>
              </li>
          </ul>
        );
    }
    
}


export default Splash;