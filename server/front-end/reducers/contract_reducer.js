import {
  RECEIVE_CONTRACT,
  RECEIVE_ALL_CONTRACTS
} from '../actions/contracts_actions';
import merge from 'lodash/merge';

const ContractReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CONTRACT:
      console.log('in reducer');
      console.log(action.contract);
      return merge({}, state, action.contract);
    case RECEIVE_ALL_CONTRACTS:
      if (action.contracts) return action.contracts;
      return state;
    default:
      return state;
  }
};

export default ContractReducer;
