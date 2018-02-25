import { combineReducers } from 'redux';
import ContractReducer from './contract_reducer';

const entitiesReducer = combineReducers({
  contracts: ContractReducer
});

export default entitiesReducer;
