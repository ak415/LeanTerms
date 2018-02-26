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
      if (!this.props.currentUser) {
        return null;
      }
        return (
          <div className="profile-wrap">
              <div className="userpage-title">
                <h1>
                  Profile -
                </h1>
                <div>
                  {this.props.currentUser.username}
                </div>
              </div>

              <div>
                <div>

                </div>

                <div>

                </div>
              </div>

          </div>
        );
    }
}


export default Profile;
