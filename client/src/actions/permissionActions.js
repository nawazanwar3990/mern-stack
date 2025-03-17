import {
    FETCH_PERMISSIONS,
    ADD_PERMISSION,
    UPDATE_PERMISSION,
    DELETE_PERMISSION
  } from './types';
  import permissionService from '../services/permissionService';
  
  export const fetchPermissions = () => async (dispatch) => {
    const permissions = await permissionService.getAll();
    dispatch({ type: FETCH_PERMISSIONS, payload: permissions });
  };
  
  export const addPermission = (permission) => async (dispatch) => {
    const newPermission = await permissionService.create(permission);
    dispatch({ type: ADD_PERMISSION, payload: newPermission });
  };
  
  export const updatePermission = (id, permission) => async (dispatch) => {
    const updatedPermission = await permissionService.update(id, permission);
    dispatch({ type: UPDATE_PERMISSION, payload: updatedPermission });
  };
  
  export const deletePermission = (id) => async (dispatch) => {
    await permissionService.delete(id);
    dispatch({ type: DELETE_PERMISSION, payload: id });
  };
  