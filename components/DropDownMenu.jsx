"use client"
import React from 'react'
import NavBarMenuItems from './NavBarMenuItems';

const DropDownMenu = ({ submenus, dropdown, depthLevel }) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <NavBarMenuItems items={submenu} key={index} depthLevel={depthLevel}/>
      ))}   
    </ul>
  )
}

export default DropDownMenu