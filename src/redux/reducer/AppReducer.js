import {combineReducers} from 'redux';
import {AuthReducer} from './AuthReducer';
import {LivestockReducer} from './LivestockReducer';

export default combineReducers({
  auth: AuthReducer,
  livestock: LivestockReducer,
});
