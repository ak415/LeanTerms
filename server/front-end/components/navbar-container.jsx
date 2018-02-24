import {connect} from 'react-redux';
import Navbar from './navbar';
import {withRouter} from 'react-router-dom';
import {LoginUser,LogoutUser,CreateUser,CurrentUser} from '../actions/session_actions';

const mapStateToProps = (state) =>(
    {
        currentUser: state.session.CurrentUser
    }
);


const mapDispatchToProps = (dispatch) =>(
     {
        loginuser: (user) => dispatch(LoginUser(user)),
        logoutuser: () => dispatch(LogoutUser()),
        createuser: (user) => dispatch(CreateUser(user)),
        currentuser: () => dispatch(CurrentUser()) 
     }
);


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Navbar));