import React, { useState, useEffect } from 'react';
import './Css/NewMenu.css'; // Import your CSS file with the necessary styles

function NewMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Initially hide menu in mobile view
  const [isOverlayActive, setIsOverlayActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsOverlayActive(!isOverlayActive);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsOverlayActive(false);
  };

  const [activeSubmenu, setActiveSubmenu] = useState(null); // Track active submenu

  const handleMenuItemClick = (submenuIndex) => {
    setActiveSubmenu(activeSubmenu === submenuIndex ? null : submenuIndex);
  };

  const handleSubItemClick = () => {
    closeMenu();
    // Handle click on sub-items as needed
  };

  useEffect(() => {
    // Close menu and overlay when the window is resized to desktop view
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(true);
        setIsOverlayActive(false);
      } else {
        setIsMenuOpen(false);
        setIsOverlayActive(false);
      }
    };

    // Add a listener to handle window resize
    window.addEventListener('resize', handleResize);

    // Initialize menu state based on the current window width
    handleResize();

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`menu-container ${isOverlayActive ? 'overlay-active' : ''}`}>
      <div className={`menu-btn ${isMenuOpen ? 'menu-open' : ''}`} onClick={toggleMenu}>
        Menu
      </div>
      <div className={`menu ${isMenuOpen ? 'menu-open' : ''}`}>
        <span className="close-btn" onClick={closeMenu}>
          &times;
        </span>
        <ul>
          <li className={`menu-item ${activeSubmenu === 1 ? 'active' : ''}`} onClick={() => handleMenuItemClick(1)}>
            <a href="#">Menu Item 1</a>
            <ul className="sub-menu">
              <li className="sub-item" onClick={handleSubItemClick}>
                <a href="#">Subitem 1</a>
              </li>
              <li className="sub-item" onClick={handleSubItemClick}>
                <a href="#">Subitem 2</a>
              </li>
            </ul>
          </li>
          <li className={`menu-item ${activeSubmenu === 2 ? 'active' : ''}`} onClick={() => handleMenuItemClick(2)}>
            <a href="#">Menu Item 2</a>
            <ul className="sub-menu">
              <li className="sub-item" onClick={handleSubItemClick}>
                <a href="#">Subitem 1</a>
              </li>
              <li className="sub-item" onClick={handleSubItemClick}>
                <a href="#">Subitem 2</a>
              </li>
            </ul>
          </li>
          {/* Add more menu items if needed */}
        </ul>
      </div>
    </div>
  );
}

export default NewMenu;
