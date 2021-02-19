import React from "react";

export default function SideMenu() {
  return (
    <aside className="col-2 SideMenu">
      <div className="SideMenu--header">
        <div className="mb-4 SideMenu--header--Avatar"></div>
        <h6 className="text-center">Alex</h6>
      </div>
      <ul className="list-unstyled ml-2 mt-2">
        <li className="mb-2">About</li>
        <li className="mb-2">Works</li>
      </ul>
    </aside>
  );
}
