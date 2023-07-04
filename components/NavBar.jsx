"use client"
import React from 'react'
import NavBarMenuItems from './NavBarMenuItems';

const NavBar = ({ menuItems }) => {
  const depthLevel = 0;
  return (
    <nav>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          return (
            <NavBarMenuItems items={menu} key={index} depthLevel={depthLevel}/>
          );
        })}
      </ul>
    </nav>
  )
}

export default NavBar