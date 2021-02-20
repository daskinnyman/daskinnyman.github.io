import React from "react";
import logo from "../images/avatar.png";

export default function SideMenu() {
  return (
    <aside className="col-3 SideMenu  d-flex flex-column align-items-end">
      <div className="SideMenu--header">
        <div className="mb-4 SideMenu--header--Avatar ">
          <img className="w-100 h-100" src={logo} />
        </div>
        <h6 className="text-right">Alex</h6>
      </div>
      <ul className="list-unstyled ml-2 mt-2">
        <li className="mb-2 text-right">About me</li>
        <li className="mb-2 text-right">Projects</li>
      </ul>
    </aside>
  );
}
