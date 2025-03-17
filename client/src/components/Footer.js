import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-3 mt-auto">
      <div className="container text-center">
        <p className="mb-0">&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
      </div>
    </footer>
  );
}
