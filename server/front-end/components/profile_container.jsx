import {connect} from 'react-redux';
import Profile from './profile';
import {withRouter} from 'react-router-dom';



const mapStateToProps = (state) =>(
    {
        currentuser: state.session.CurrentUser
    }
);



const mapDispatchToProps = (dispatch) =>(

    {

    }
);



export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Profile));