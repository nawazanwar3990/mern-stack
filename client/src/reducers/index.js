import { combineReducers } from 'redux';
import permissionReducer from './permissionReducer';

const rootReducer = combineReducers({
  permissions: permissionReducer,
});

export default rootReducer;
