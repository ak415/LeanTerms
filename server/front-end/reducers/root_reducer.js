import {combineReducers} from 'redux';
import entitiesReducer from './entity_reducer';
import SessionReducer from './session_reducer';
import ErrorReducer from './errors_reducer';

const RootReducer =combineReducers({
    entities: entitiesReducer,
    session : SessionReducer,
    errors: ErrorReducer
});


export default RootReducer;

