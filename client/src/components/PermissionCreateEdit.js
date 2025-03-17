import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPermission, updatePermission } from "../actions/permissionActions";
import { useNavigate, useParams } from "react-router-dom";

export default function AddPermission() {
  const [name, setName] = useState("");
  const [label, setLabel] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  // Get permissions from Redux state
  const permissions = useSelector((state) => state.permissions?.permissions || []);

  useEffect(() => {
    if (id && permissions.length > 0) {
      const permission = permissions.find((p) => String(p.id) === id);
      if (permission) {
        setName(permission.name);
        setLabel(permission.label);
      }
    }
  }, [id, permissions]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const permissionData = { name, label };

    if (id) {
      dispatch(updatePermission(id, permissionData));
    } else {
      dispatch(addPermission(permissionData));
    }

    navigate("/permissions");
  };

  return (
    <div className="container mt-4">
      <div className="card shadow">
        {/* Card Header */}
        <div className="card-header d-flex justify-content-between align-items-center">
          <h2 className="mb-0">{id ? "Edit Permission" : "Add Permission"}</h2>
          <button type="submit" form="permission-form" className="btn btn-primary">
            {id ? "Update" : "Add"} Permission
          </button>
        </div>

        {/* Card Body */}
        <div className="card-body">
          <form id="permission-form" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Permission Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Permission Label</label>
              <input
                type="text"
                className="form-control"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                required
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
