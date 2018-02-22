import {combineReducers} from 'redux';
import ContractReducer from './contract_reducer';

const entitiesReducer = combineReducers({   
   contract: ContractReducer
});


export default  entitiesReducer;
