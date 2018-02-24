import React from 'react';


class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.changeDisplay = this.changeDisplay.bind(this);
        this.switchToLogIn = this.switchToLogIn.bind(this);
        this.switchToSignUp = this.switchToSignUp.bind(this);
    }


    changeDisplay(id){
        
        if (document.getElementById(id)){
            if (document.getElementById(id).style.display === 'flex'){
                document.getElementById(id).style.display = 'none';
            }else{
                document.getElementById(id).style.display = 'flex';
            }
        }


    }

    switchToSignUp() {

        if (document.getElementById('id02')){
             document.getElementById('id02').style.display='none';
             document.getElementById('id01').style.display='flex';
        }
    }

    switchToLogIn() {
        if (document.getElementById('id01')){
            document.getElementById('id01').style.display='none';
            document.getElementById('id02').style.display='flex';
        }
    }

    render(){
        return(
            <div>
                 <div className="wrap-nav-and-info">

                    <div className="nav-bar">
                        <div className="logo-title-wrap">

                          <img src="http://res.cloudinary.com/aazaiez/image/upload/v1519269426/logo_3_LT_sknvf1.svg" className="LeanTerms-logo-white"/>
                          <div>LeanTerms</div>
                        </div>

                        <div className="main-nav">

                          <button
                          id="login-effects" className="cd-signup"
                           onClick={() => this.changeDisplay('id02')}>Log In</button>

                          <button
                          id="nav-bar-signup" className="cd-signup"
                           onClick={() => this.changeDisplay('id01')}>Sign Up</button>
                        </div>
                    </div>
                </div>

                    <div id="id01" className="modal">
                      <form className="modal-content" action="">
                        <div className="container">
                          <span onClick={()=> this.changeDisplay('id01')} className="close" title="Close Modal">X</span>
                          <h1>Sign Up</h1>
                          <p>Please fill in this form to create an account.</p>
                          <hr/>
                          <label><b>Username</b></label>
                          <input type="text" placeholder="Enter Username" name="email" required/>

                          <label><b>Email</b></label>
                          <input type="password" placeholder="Enter Email" name="psw" required/>

                          <label><b>Password</b></label>
                          <input type="password" placeholder="Enter Password" name="psw-repeat" required/>



                          <div className="clearfix">
                            <button type="submit" className="signup">Sign Up</button>
                            <button type="button" onClick={() => this.changeDisplay('id01')} className="cancelbtn">Cancel</button>
                          </div>

                          <div className="form-last-line">
                            <button type="button" className="demobtn">Demo</button>

                          <p className="alternative-option">Already have an account? <a  id="log-in-instead" href="#"
                            onClick={this.switchToLogIn} style={{color:"#c24e04d4"}}>Log In</a>.</p>

                          </div>
                        </div>
                      </form>
                    </div>





                    <div id="id02" className="modal">
                          <form className="modal-content" action="">
                            <div className="container">
                              <span onClick={() => this.changeDisplay('id02')} className="close" title="Close Modal">X</span>
                              <h1>Log In</h1>
                              <p>In order to access your account, please enter your information.</p>
                              <hr/>
                              <label><b>Username</b></label>
                              <input type="text" placeholder="Enter Username" name="email" required/>

                              <label><b>Password</b></label>
                              <input type="password" placeholder="Enter Password" name="psw-repeat" required/>


                              <div className="clearfix">
                                <button type="submit" className="signup">Log In</button>
                                <button type="button" onClick={() => this.changeDisplay('id02')} className="cancelbtn">Cancel</button>
                              </div>

                              <div className="form-last-line">
                                <button type="button" className="demobtn">Demo</button>

                                <p className="alternative-option">Don't have an account? <a  id="sign-up-instead" href="#"  onClick={this.switchToSignUp()} style={{color:"#c24e04d4"}}>Sign Up</a>.</p>
                              </div>
                            </div>
                          </form>
                    </div>
                </div>

        );
    }
}





export default Navbar;
