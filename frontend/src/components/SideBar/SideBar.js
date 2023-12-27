import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SideBarData } from "./SideBarData";
import "./SideBar.css";
import { IconContext } from "react-icons";
import "../../styles/global.css";
const SideBar = () => {

  return (
    <div className="com-side-bar">
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars size={30} style={{ color: '#000000' }} onClick={showSideBar} />
          </Link>
        </div>
        <nav className={"nav-menu active"}>
          <ul className="nav-menu-items" onClick={showSideBar}>
            
        
            {SideBarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
};
export default SideBar;