import React, { useState } from "react";


function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <div className={`menu menu-display ${isMenuOpen ? " menu-open" : ""}`}>
        <h2>Menu</h2>
        <ul className="menu-items menu">
          <li className="menu-item">
            Menu Item 1
            <ul className="sub-menu">
              <li>Sub Item 1</li>
              <li>Sub Item 2</li>
              <li>Sub Item 3</li>
              <li>Sub Item 1</li>
              <li>Sub Item 2</li>
              <li>Sub Item 3</li>
              <li>Sub Item 1</li>
              <li>Sub Item 2</li>
              <li>Sub Item 3</li>
              <li>Sub Item 3</li>
            </ul>
          </li>
          <li className="menu-item">
            Menu Item 2
            <ul className="sub-menu">
              <li>Sub Item 1</li>
              <li>Sub Item 2</li>
            </ul>
          </li>
          <li className="menu-item">
            Menu Item 3
            <ul className="sub-menu">
              <li>Sub Item 1</li>
            </ul>
          </li>
        </ul>
      </div>

      <button className="menu-button mobile-menu-button" onClick={toggleMenu}>
        Menu Open
      </button>
    </div>
  );
}

export default Menu;
