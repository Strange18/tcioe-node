"use client";
import React, { useState, useEffect, useRef } from "react";
import DropDownMenu from "./DropDownMenu";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const NavBarMenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef();
  const contentRef = useRef();

  const handleButtonClick = () => {
    setDropdown((prevDropdown) => !prevDropdown);
  };

  const handleMouseEnter = () => {
    setDropdown(true);
  };

  const handleMouseLeave = () => {
    setDropdown(false);
  };


  return (
    <li
      className="menu-items"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {items.submenu ? (
        <>
          <button type="button" aria-haspopup="menu">
            {items.title}{" "}
            {depthLevel > 0 ? (
              <span><IoIosArrowForward /></span>
            ) : (
                <span><IoIosArrowDown className="arrow-icon"/></span>
            )}
          </button>
          {dropdown && (
            <DropDownMenu
              submenus={items.submenu}
              dropdown={dropdown}
              depthLevel={depthLevel}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              contentRef={contentRef}
            />
          )}
        </>
      ) : (
        <a
          href={items.url}
          target={
            items.title === "SILPA Magazine" ||
              items.title === "Industrial Vision" ||
              items.title === "B.E./B.Arch. Admission" ||
              items.title === "M.Sc. Admission"
              ? "_blank"
              : "_self"
          }
        >
          {items.title}
        </a>
      )}
    </li>
  );
};

export default NavBarMenuItems;