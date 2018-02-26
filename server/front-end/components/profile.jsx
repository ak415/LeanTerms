import React from 'react';

class Profile extends  React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }


    componentWillMount(){
        this.props.getcontract(this.props.current_user.id);
    }

    componentWillReceiveProps(nextprops){
        this.setState(nextprops.contracts);
    }


    render(){
        debugger;
        return (
          <div>
                Hello
          </div>
        );
    }
}


export default Profile;