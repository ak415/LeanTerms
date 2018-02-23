import {RECEIVE_CURRENT_USER,REMOVE_CURRENT_USER} from '../actions/session_actions';


import merge from 'lodash/merge';


const _initialstate ={
    CurrentUser: null
};


const SessionReducer = (state=_initialstate,action)=>{
    Object.freeze(state);
    let newState;
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return merge({},{CurrentUser: action.user});
        case REMOVE_CURRENT_USER:
            return _initialstate;
        default:
            return state;
    }
};


export default SessionReducer;


