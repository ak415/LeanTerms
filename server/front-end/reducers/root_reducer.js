import {combineReducers} from 'redux';
import entitiesReducer from './entity_reducer';

const RootReducer =combineReducers({
    entities: entitiesReducer,
});


export default RootReducer;

