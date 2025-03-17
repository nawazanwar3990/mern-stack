import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-primary text-white py-3">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-center">
          <h1 className="mb-0">My App</h1>
          <nav className="d-flex gap-2">
            <Link to="/dashboard" className="btn btn-light">Dashboard</Link>
            <Link to="/permissions" className="btn btn-light">Permissions</Link>
            <Link to="/roles" className="btn btn-light">Roles</Link>
            <Link to="/users" className="btn btn-light">Users</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
