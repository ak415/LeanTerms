import React from 'react';
import {Link} from 'react-router-dom';
import jsPDF from "jspdf";

class Profile extends  React.Component{
    constructor(props){
        super(props);
        this.state =this.props.contracts || {};
        this.DownloadContract = this.DownloadContract.bind(this);
    }


    componentWillMount(){
        debugger;
        this.props.getcontract(this.props.currentUser.id);
    }

    componentWillReceiveProps(nextProps){
        debugger;
        this.setState({contracts: nextProps.contracts});
    }



    DownloadContract(){
        let doc = new jsPDF();
        doc.text("Hello 1",10,10);
        debugger;
        doc.save("../../pdf/1.pdf");
    }


    render(){
        let contracts = [];
        let link ="";
        debugger;
        if (this.state.contracts){
            for(let i =0;i<this.state.contracts.length; i++){
                link =<li onClick={this.DownloadContract(this[i])}>Contract {i + 1}</li>
                contracts.push(link)
            }
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
                    {contracts}
                </div>

                <div>

                </div>
              </div>

          </div>
        );
    }
}


export default Profile;
