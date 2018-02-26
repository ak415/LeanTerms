import { connect } from 'react-redux';
import Navbar from './navbar';
import { withRouter } from 'react-router-dom';
import {
  LoginUser,
  LogoutUser,
  createUser,
  currentUser
} from '../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  loginuser: user => dispatch(LoginUser(user)),
  logoutuser: () => dispatch(LogoutUser()),
  createuser: user => dispatch(createUser(user)),
  currentuser: () => dispatch(currentUser())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
