import React from 'react';
import ReactDOM from 'react-dom';


class Demo extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello World</h1>
            </div>
        );
    }
}


document.addEventListener("DOMContentLoaded",()=>{
    ReactDOM.render(<Demo />,document.getElementById('root'));
});