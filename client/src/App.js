import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./store";
import Dashboard from "./components/Dashboard";

import PermissionList from "./components/PermissionList";
import PermissionCreateEdit from "./components/PermissionCreateEdit";

import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Header />
          <main className="flex-grow-1 d-flex justify-content-center align-items-center">
            <div className="container py-4">
              <Routes>
                <Route path="/" element={<Dashboard />} /> {/* Default Route */}
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/permissions" element={<PermissionList />} />
                <Route path="/permission/create" element={<PermissionCreateEdit />} />
              </Routes>
            </div>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}
