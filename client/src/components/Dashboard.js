import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Dashboard</h2>
      
      <div className="row">
        {/* Permissions Card */}
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Manage Permissions</h5>
              <p className="card-text">
                Add, edit, or remove user permissions.
              </p>
              <Link to="/permissions" className="btn btn-primary">Go to Permissions</Link>
            </div>
          </div>
        </div>

        {/* Roles Card */}
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Manage Roles</h5>
              <p className="card-text">
                Define roles and assign permissions to users.
              </p>
              <Link to="/roles" className="btn btn-primary">Go to Roles</Link>
            </div>
          </div>
        </div>

        {/* Users Card */}
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Manage Users</h5>
              <p className="card-text">
                Create, update, or delete user accounts.
              </p>
              <Link to="/users" className="btn btn-primary">Go to Users</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
