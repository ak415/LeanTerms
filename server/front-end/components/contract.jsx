import React from 'react';


class Contract extends React.Component {

  constructor(props) {
    super(props);
    this.changedisplay = this.changedisplay.bind(this);
    this.switchToLogIn = this.switchToLogIn.bind(this);
    this.switchToSignUp = this.switchToSignUp.bind(this);
    this.updateProgressBar = this.updateProgressBar.bind(this);

  }

  changedisplay(id){
      if (document.getElementById(id)){
          document.getElementById(id).style.display = 'flex';
      }
      return ;
  }

  switchToSignUp() {
    document.getElementById('id02').style.display='none';
    document.getElementById('id01').style.display='flex';
  }

  switchToLogIn() {
    document.getElementById('id01').style.display='none';
    document.getElementById('id02').style.display='flex';
  }

  updateProgressBar() {
    $("#bar").text(($("#bar").width()/$("#bar").parent().width()*100).toFixed(0) + "%");
  }

  render() {
    return(

      <div>
          <div className="contract-form-wrapper">


            <div id="progress" className="graph">
              <div id="bar"><p>34% complete</p></div>
            </div>
            <div className="contract-title">
              <h1>California Residential Lease Agreement</h1>
            </div>
          </div>


      </div>


    );
  }

}



export default Contract;
