import {
  RECEIVE_CONTRACT,
  RECEIVE_ALL_CONTRACTS
} from '../actions/contracts_actions';
import merge from 'lodash/merge';

const ContractReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = Object.assign([], state);
  switch (action.type) {
    case RECEIVE_CONTRACT:
      return Object.assign([], newState, action.contract);
    case RECEIVE_ALL_CONTRACTS:
      return action.contracts;
    default:
      return state;
  }
};

export default ContractReducer;
