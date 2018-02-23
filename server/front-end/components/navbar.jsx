import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.changeDisplay = this.changeDisplay.bind(this);
    this.switchToLogIn = this.switchToLogIn.bind(this);
    this.switchToSignUp = this.switchToSignUp.bind(this);
    this.update = this.update.bind(this);
    this.handlesubmitlogin = this.handlesubmitlogin.bind(this);
    this.handlesubmitlogout = this.handlesubmitlogout.bind(this);
    this.handlesubmitnewuser = this.handlesubmitnewuser.bind(this);
  }

  componentWillMount() {
    this.props.currentuser();
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.currentUser);
  }

  changeDisplay(id) {
    if (document.getElementById(id)) {
      if (document.getElementById(id).style.display === 'flex') {
        document.getElementById(id).style.display = 'none';
      } else {
        document.getElementById(id).style.display = 'flex';
      }
    }
  }

  update(type) {
    return e => this.setState({ [type]: e.target.value });
  }

  handlesubmitlogin() {
    return this.props.loginuser(this.state).then(user => {
      this.changeDisplay('id02');
      return this.props.history.push('/profile');
    });
  }

  handlesubmitlogout() {
    return this.props
      .logoutuser()
      .then(user => this.props.history.push('./home'));
  }

  handlesubmitnewuser() {
    return this.props
      .createuser(this.state)
      .then(this.props.loginuser(this.state))
      .then(this.props.history.push('./profile'));
  }

  switchToSignUp() {
    if (document.getElementById('id02')) {
      document.getElementById('id02').style.display = 'none';
      document.getElementById('id01').style.display = 'flex';
    }
  }

  switchToLogIn() {
    if (document.getElementById('id01')) {
      document.getElementById('id01').style.display = 'none';
      document.getElementById('id02').style.display = 'flex';
    }
  }

  render() {
    let display;

    if (
      this.props.currentUser &&
      Object.keys(this.props.currentUser).length > 0
    ) {
      display = <button onClick={this.handlesubmitlogout}>Logout</button>;
    } else {
      display = '';
    }

    return (
      <div>
        {display}
        <div className="wrap-nav-and-info">
          <div className="nav-bar">
            <div className="logo-title-wrap">
              <img
                src="http://res.cloudinary.com/aazaiez/image/upload/v1519269426/logo_3_LT_sknvf1.svg"
                className="LeanTerms-logo-white"
              />
              <div>LeanTerms</div>
            </div>

            <div className="main-nav">
              <button
                id="login-effects"
                className="cd-signup"
                onClick={() => this.changeDisplay('id02')}
              >
                Log In
              </button>

              <button
                id="nav-bar-signup"
                className="cd-signup"
                onClick={() => this.changeDisplay('id01')}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>

        <div id="id01" className="modal">
          <form className="modal-content">
            <div className="container">
              <span
                onClick={() => this.changeDisplay('id01')}
                className="close"
                title="Close Modal"
              >
                X
              </span>
              <h1>Sign Up</h1>
              <p>Please fill in this form to create an account.</p>
              <hr />
              <label>
                <b>Username</b>
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                name="email"
                onChange={this.update('username')}
                required
              />

              <label>
                <b>Email</b>
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                name="psw"
                onChange={this.update('email')}
                required
              />

              <label>
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="psw-repeat"
                onChange={this.update('password')}
                required
              />

              <div className="clearfix">
                <button
                  type="submit"
                  className="signup"
                  onClick={this.handlesubmitnewuser}
                >
                  Sign Up
                </button>
                <button
                  type="button"
                  onClick={() => this.changeDisplay('id01')}
                  className="cancelbtn"
                >
                  Cancel
                </button>
              </div>

              <div className="form-last-line">
                <button type="button" className="demobtn">
                  Demo
                </button>

                <p className="alternative-option">
                  Already have an account?{' '}
                  <a
                    id="log-in-instead"
                    href="#"
                    onClick={this.switchToLogIn}
                    style={{ color: '#c24e04d4' }}
                  >
                    Log In
                  </a>.
                </p>
              </div>
            </div>
          </form>
        </div>

        <div id="id02" className="modal">
          <form className="modal-content">
            <div className="container">
              <span
                onClick={() => this.changeDisplay('id02')}
                className="close"
                title="Close Modal"
              >
                X
              </span>
              <h1>Log In</h1>
              <p>
                In order to access your account, please enter your information.
              </p>
              <hr />
              <label>
                <b>Username</b>
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                name="email"
                onChange={this.update('username')}
                required
              />

              <label>
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="psw-repeat"
                required
                onChange={this.update('password')}
              />

              <div className="clearfix">
                <button
                  type="submit"
                  className="signup"
                  onClick={this.handlesubmitlogin}
                >
                  Log In
                </button>
                <button
                  type="button"
                  onClick={() => this.changeDisplay('id02')}
                  className="cancelbtn"
                >
                  Cancel
                </button>
              </div>

              <div className="form-last-line">
                <button type="button" className="demobtn">
                  Demo
                </button>

                <p className="alternative-option">
                  Don't have an account?{' '}
                  <a
                    id="sign-up-instead"
                    href="#"
                    onClick={this.switchToSignUp}
                    style={{ color: '#c24e04d4' }}
                  >
                    Sign Up
                  </a>.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Navbar;
