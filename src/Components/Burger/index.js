import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./index.css";
function SideBar(props) {
  return (
    <Menu disableAutoFocus width={"250px"} right >
      <a className="menu-item" href="/admin/home">
        Home
      </a>
      <a className="menu-item" href="/admin/gg">
        GG
      </a>
    </Menu>
  );
}
export default SideBar;
