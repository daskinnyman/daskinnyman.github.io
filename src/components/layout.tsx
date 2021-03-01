import React from "react";
import SideMenu from "./sideMenu";

export default function Layout({ children }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <SideMenu />
        <main className="col-12 col-md-9 offset-md-3">{children}</main>
      </div>
    </div>
  );
}
