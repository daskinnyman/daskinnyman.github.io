import React, { createContext, useRef } from "react";
import { SideMenu } from "./sideMenu";
import "../sass/_main.scss";

export enum TabEnum {
  ABOUT = "ABOUT",
  PROJECT = "PROJECT",
}

export const RefContext = createContext({ ABOUT: null, PROJECT: null });

export default function Layout({ children }) {
  const tabRefs = {
    ABOUT: useRef(null),
    PROJECT: useRef(null),
  };

  const onTabClick = (tabName: keyof typeof TabEnum) => {
    tabRefs[tabName]?.current.scrollIntoView();
  };

  return (
    <div className="container-fluid layout">
      <div className="row">
        <RefContext.Provider value={tabRefs}>
          <SideMenu onTabClick={onTabClick} />
          <main className="col-12 col-md-9 offset-md-3">{children}</main>
        </RefContext.Provider>
      </div>
    </div>
  );
}
