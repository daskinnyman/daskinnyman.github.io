import React from "react";
import logo from "../images/avatar.png";

export default function SideMenu() {
  return (
    <aside className="col-12 col-md-3  SideMenu d-flex flex-column align-items-center align-items-md-end">
      <div className="SideMenu--header">
        <div className="mb-4 SideMenu--header--Avatar ">
          <img className="w-100 h-100" src={logo} />
        </div>
        <h6 className="text-center  text-md-right">Alex</h6>
      </div>
      <ul className="list-unstyled ml-2 mt-2">
        <li className="mb-2 text-center text-md-right">About me</li>
        <li className="mb-2 text-center  text-md-right">Projects</li>
      </ul>
    </aside>
  );
}
