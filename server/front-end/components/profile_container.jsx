import { connect } from 'react-redux';
import Profile from './profile';
import { withRouter } from 'react-router-dom';
import {fetchAllUserContracts} from "../actions/contracts_actions";

const mapStateToProps = state => ({
    currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
    getcontract: (userid) => dispatch(fetchAllUserContracts(userid))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Profile)
);
