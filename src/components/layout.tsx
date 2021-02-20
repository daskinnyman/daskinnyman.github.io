import React from "react";
import SideMenu from "./sideMenu";

export default function Layout({ children }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <SideMenu />
        <main className="col-9 offset-3">{children}</main>
      </div>
    </div>
  );
}
