import React from 'react';

class Profile extends  React.Component{
    constructor(props){
        super(props);
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
