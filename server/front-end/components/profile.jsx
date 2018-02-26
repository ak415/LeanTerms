import React from 'react';

class Profile extends  React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }


    componentWillMount(){
        this.props.getcontract(this.props.currentUser.id);
    }

    componentWillReceiveProps(nextprops){
        this.setState(nextprops.contracts);
    }


    render(){
      if (this.props.currentUser === undefined) {
        return null;
      }
        return (
          <div className="profile-wrap">
              <div className="userpage-title">
                <h1>
                  User Homepage -
                </h1>
                <div>
                  {this.props.currentUser.username}
                </div>
              </div>

              <div className="userpage-contracts-holder">
                <div className="contract-drafts">
                  <h1>
                    Drafts
                  </h1>

                  <div className="contract-container-userpage">
                    <span>Street Address Here</span>
                    <span>Rent Price</span>
                    <span>Tenant Name</span>
                    <span>Edit</span>
                    <span>Download</span>

                  </div>

                  <div>
                    Example Contract
                  </div>

                  <div>
                    Example Contract
                  </div>

                  <div>
                    Example Contract
                  </div>

                  <div>
                    Example Contract
                  </div>


                </div>

                <div className="contract-drafts">
                  <h1>
                    Completed
                  </h1>


                  <div>
                    Example Contract
                  </div>

                  <div>
                    Example Contract
                  </div>

                  <div>
                    Example Contract
                  </div>

                  <div>
                    Example Contract
                  </div>

                  <div>
                    Example Contract
                  </div>
                </div>
              </div>

          </div>
        );
    }
}


export default Profile;
