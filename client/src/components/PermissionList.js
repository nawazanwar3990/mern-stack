import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPermissions, deletePermission } from "../actions/permissionActions";
import { Link } from "react-router-dom";

export default function PermissionList() {
  const dispatch = useDispatch();
  const { permissions = [] } = useSelector((state) => state.permissions || {}); // Prevent errors if undefined

  useEffect(() => {
    dispatch(fetchPermissions());
  }, [dispatch]);

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h2 className="mb-0">Permissions</h2>
          <Link to="/permission/create" className="btn btn-primary">
            + Add Permission
          </Link>
        </div>

        <div className="card-body">
          {permissions.length === 0 ? (
            <p className="text-muted text-center">No permissions available.</p>
          ) : (
            <div className="row">
              {permissions.map(({ id, name, label }) => (
                <div key={id} className="col-md-6 mb-3">
                  <div className="card border-light shadow-sm">
                    <div className="card-body d-flex justify-content-between align-items-center">
                      <div>
                        <h5 className="card-title mb-1">{name}</h5>
                        <p className="card-text text-muted">{label}</p>
                      </div>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => dispatch(deletePermission(id))}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
