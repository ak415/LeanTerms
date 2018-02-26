import React from 'react';
import {Link} from 'react-router-dom';
import jsPDF from "jspdf";

class Profile extends  React.Component{
    constructor(props){
        super(props);
        this.state =this.props.contracts || {};
        this.DownloadContract = this.DownloadContract.bind(this);
        this.Getdate = this.Getdate.bind(this);
    }


    componentWillMount(){
        this.props.getcontract(this.props.currentUser.id);
    }

    componentWillReceiveProps(nextProps){
        this.setState({contracts: nextProps.contracts});
    }

    Getdate(){
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1; //January is 0!
        let yyyy = today.getFullYear();

        if(dd<10) {
            dd = '0'+dd
        }

        if(mm<10) {
            mm = '0'+mm
        }

        let t= mm + '/' + dd + '/' + yyyy;
        return t;
    }



    DownloadContract(contract){
        let doc = new jsPDF();


        doc.setFontSize(25);
        doc.setFontStyle('bold');
        doc.text("Contract",10,20);

        doc.setFontSize(20);
        doc.setFontStyle('normal');
        doc.text(50,45,`${contract.leaseType} Lease Agreement`);

        doc.setFontSize(15);
        doc.setFontStyle('bold');
        doc.text(10,60,"Agreement");

        doc.setFontStyle('normal');
        doc.text(10,75,`This lease agreement, effective on  effectiveDate is made by tenant and landlord.`);

        doc.setFontSize(15);
        doc.setFontStyle('bold');
        doc.text(10,90,"Property");

        doc.setFontSize(15);
        doc.setFontStyle('normal');
        doc.text(10,100,`Property type: ${contract.propertyType}`);
        doc.text(10,110,`${contract.propertyStreetAddress}`);
        doc.text(10,120,`${contract.propertyState}, ${contract.propertyZipCode}`);

        doc.text(10,135,`The ${contract.propertyType} ${contract.furnished ? 'will be' : 'will not be'} furnished Security Deposit Tenant ${contract.parkingAvailable ? 'will' : 'will not'} have access to`);
        doc.text(10,145,`parking at this ${contract.propertyType}.`);

        doc.setFontStyle('bold');
        doc.text(10,165,"Payment");
        doc.setFontSize(15);
        doc.setFontStyle('normal');
        doc.text(10,175,`The landlord’s preferred method of payment is ${contract.paymentMethod}.`);
        doc.text(10,185,`The landlord [ does / does not ] accept payment through other methods`);

        doc.setFontStyle('bold');
        doc.text(10,205,"Security Deposit");

        doc.setFontStyle('normal');
        doc.text(10,215,`The landlord [requires / does not require] a security deposit.[The deposit amount,`);
        doc.text(10,225,`due upon signing, is depositAmount]. [At the end of the lease agreement, the`);
        doc.text(10,235,`the landlord will inspect the propertyType and use the security deposit to cover any`);
        doc.text(10,245,`amount of money spent on cleaning the propertyType and/or repairing any damages `);
        doc.text(10,255,`caused by the tenant during the term of this lease agreement The remainder of`);
        doc.text(10,265,`the security deposit will be returned to the tenant with an itemized returned to the `);
        doc.text(10,275,`tenant with an itemized demonstrate how the deducted amount was spent. This list`);
        doc.text(10,285,`must also include a copy of the original receipt(s) detailing each list item transaction.]`);

        doc.addPage();


        doc.setFontStyle('bold');
        doc.text(10,20,"Pets");

        doc.setFontStyle('normal');
        doc.text(10,30,`The landlord ${contract.petsAllowed? 'does' : 'does not'} allow tenant to have pets in the ${contract.propertyType}`);

        doc.setFontStyle('bold');
        doc.text(10,50,"Guests and Subletting");
        doc.setFontStyle('normal');
        doc.text(10,60,`The landlord [does / does not] allow tenant to sublet the ${contract.propertyType}. `);
        doc.text(10,70,`The landlord [does / does not] allow tenant to have guests in the ${contract.propertyType}. `);

        doc.setFontStyle('bold');
        doc.text(10,90,"Utilities");

        doc.setFontStyle('normal');
        doc.text(10,100,`Utilities ${contract.utilityBillsIncluded ? 'are' : 'are not'} included in the rent amount.`);

        doc.setFontStyle('bold');
        doc.text(10,120,"Rent");
        doc.setFontStyle('normal');
        doc.text(10,130,`Rent and other monthly charges are due on the ${this.Getdate()} of each month.`);

        //
        // doc.addPage();
        //
        doc.text(10,150,"Rent: $rentAmount");

        doc.text(10,170,`The tenant agrees to pay to the landlord, through any of the landlord’s preferred`);
        doc.text(10,180,` methods, the total amount due, $rentAmount.`);

        doc.setFontStyle('bold');
        doc.text(10,200,"Late Payments");
        doc.setFontStyle('normal');
        doc.text(10,210,`The landlord of this ${contract.propertyType} ${contract.lateFee ? 'does' : 'does not'} charge a late fee if the tenant`);
        doc.text(10,220,`does not submit the monthly rent and other charges by the agreed-upon due date.`);
        doc.text(10,230,`The late fee is $lateFeeAmount`);

        doc.setFontStyle('bold');
        doc.text(10,250,"Signature");
        doc.text(40,260,`___________ Tenant           _____________ Landloard`);

        doc.save("contract.pdf");
    }



    render(){
        let contracts = [];
        if (this.state.contracts){
            contracts = this.state.contracts.map(contract => <li onClick={() => this.DownloadContract(contract)} key={contract._id}>Contract {contract.propertyStreetAddress}</li> )
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

              <div>
                <div>
                  <ul>
                    {contracts}
                  </ul>
                </div>

                <div className="userpage-contracts">

                <div className="contract-drafts">
                  <h1>
                    Drafts
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

          </div>
        );
    }
}


export default Profile;
