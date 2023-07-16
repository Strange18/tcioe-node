"use client"
import React from 'react'
import { useState, useEffect, useRef } from 'react'
import DropDownMenu from './DropDownMenu'

const NavBarMenuItems = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false);
    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
         if (dropdown && ref.current && !ref.current.contains(event.target)) {
          setDropdown(false);
         }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
         // Cleanup the event listener
         document.removeEventListener("mousedown", handler);
         document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);

  return (
    <li className="menu-items" ref={ref}>
      {items.submenu ? (
        <>
          <button type="button" aria-haspopup="menu" onClick={() => setDropdown(prev => !prev)}>
            {items.title}{' '}
            {depthLevel > 0 ? <span>&#x25b6;</span> : <span className="arrow" />}
          </button>
          <DropDownMenu submenus={items.submenu} dropdown={dropdown} depthLevel={depthLevel}/>
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  )
}

export default NavBarMenuItems