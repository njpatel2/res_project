import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
// import imageSrc from './images/navbarBg.jpg';
import "./Css/NavbarCss.css";

const Navbar = () => {
  
  let isfirstTime = 0;
  const navItems = [
    { name: "Dashboard", dataItem: "dashboard" , iconClass: "fas fa-tachometer-alt", url:"dashboard"},
    { name: "Location", dataItem: "location" , iconClass: "fas fa-tachometer-alt", url:"location"},
    { name: "About", dataItem: "about" , iconClass: "fas fa-tachometer-alt", url:"dashboard"},
    { name: "Feedback", dataItem: "feedback" , iconClass: "fas fa-tachometer-alt", url:"dashboard"},
    { name: "Login", dataItem: "login" , iconClass: "fas fa-tachometer-alt", url:"dashboard"},
  ];

  const storedActiveItem = localStorage.getItem("activeNavItem") || "location";
  const [activeItem, setActiveItem] = useState(storedActiveItem);
  const [horiSelectorStyles, setHoriSelectorStyles] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  useEffect(() => {
    // debugger;
  
    const initialNavItem = document.querySelector(
      `.nav-item[data-item="${storedActiveItem}"]`
    );
    console.log(initialNavItem);
    if (initialNavItem) {

      handleNavItemClick({ currentTarget: initialNavItem }, storedActiveItem);
    } else {
      handleNavItemClick(
        {
          currentTarget: document.querySelector(
            '.nav-item[data-item="location"]'
          ),
        },
        "location"
      );
    }
  }, []);
 
  const handleNavItemClick = (event, item) => {
    // debugger;
    setActiveItem(item);
    localStorage.setItem("activeNavItem", item); 
   
    const navItem = event.currentTarget;
    const itemWidth = navItem.offsetWidth;
    let itemLeft = navItem.offsetLeft;
    const itemTop = navItem.offsetTop;

    // if(isfirstTime < 2){
    //   debugger;
    //   isfirstTime ++;
    //   itemLeft = navItem.offsetLeft - 5;
    // }
    setHoriSelectorStyles({
      width: `${itemWidth}px`,
      left: `${itemLeft}px`,
      top: `${itemTop}px`,
      height: "46.5px",
    });

  };

  const toggleMenu = () => {
    // debugger;
    const initialNavItem = document.querySelector(
      `.nav-item[data-item="${storedActiveItem}"]`
    );

    if (!isMenuOpen) {
      // Only adjust the horiSelectorStyles if the menu is being opened
      const activeNavItem = document.querySelector(".nav-item.active");

      if (initialNavItem) {
        handleNavItemClick({ currentTarget: initialNavItem }, storedActiveItem);
      }
    }
    setIsMenuOpen(!isMenuOpen);

    const activeNavItem = document.querySelector(".nav-link.activeLink");
    if (initialNavItem) {
      // debugger;
      const itemWidth = initialNavItem.offsetWidth;
      const itemLeft = initialNavItem.offsetLeft;
      const itemTop = initialNavItem.offsetTop;

      setHoriSelectorStyles({
        width: `100%`,
        left: `${itemLeft}px`,
        top: `${itemTop}px`,
        height: "46.5px",
      });
    }
  };

  return (
    // <nav className="navbar navbar-expand-custom navbar-mainbg" style={{ backgroundImage: `url(${imageSrc})` }}>

    <nav className="navbar navbar-expand-custom navbar-mainbg">
      <a className="navbar-brand navbar-logo" href="/">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={toggleMenu}
      >
        <i className="fas fa-bars text-white"></i>
      </button>
      <div
        className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector" style={horiSelectorStyles}>
            <div className="left"></div>
            <div className="right"></div>
          </div>
          {navItems.map((item, index) => (
          <li
            className="nav-item"
            data-item={item.dataItem}
            key={index}
          >
            <NavLink
              className={`nav-link ${activeItem === item.dataItem ? 'activeLink' : ''}`}
              to={`/${item.url}`}
              onClick={(event) => handleNavItemClick(event, item.dataItem)}
            >
              {/* <i className={item.iconClass}></i> */}
              
              {item.name}

            </NavLink>
          </li>
        ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
