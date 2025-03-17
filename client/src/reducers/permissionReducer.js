import {
    FETCH_PERMISSIONS,
    ADD_PERMISSION,
    UPDATE_PERMISSION,
    DELETE_PERMISSION
  } from '../actions/types';
  
  const permissionReducer = (state = [], action) => {
    switch (action.type) {
      case FETCH_PERMISSIONS:
        return action.payload;
      case ADD_PERMISSION:
        return [...state, action.payload];
      case UPDATE_PERMISSION:
        return state.map((perm) => (perm.id === action.payload.id ? action.payload : perm));
      case DELETE_PERMISSION:
        return state.filter((perm) => perm.id !== action.payload);
      default:
        return state;
    }
  };
  
  export default permissionReducer;
  