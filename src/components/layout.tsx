import React from "react";

export default function Layout({ children }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-10">{children}</div>
      </div>
    </div>
  );
}
