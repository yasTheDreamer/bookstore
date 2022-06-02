import React, { useState } from "react";
import HeaderItem from "../../atoms/headerItem/HeaderItem";
import Logo from "../../atoms/logo/Logo";

import "./Style.css";

const NavBar = (props) => {
  const [headerItems, SetHeaderItems] = useState([
    {
      title: "Home",
      path: "/",
      active: "active",
    },
    {
      title: "Books",
      path: "/books",
      active: "",
    },
    {
      title: "About",
      path: "/about",
      active: "",
    },
  ]);

  return (
    <div className="navbar__container">
      <Logo />
      <div className="navItems__container">
        <div className="navItems__container--nested">
          {headerItems.map((headerItem, i) => {
            return (
              <HeaderItem
                path={headerItem.path}
                title={headerItem.title}
                active={headerItem.active}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
