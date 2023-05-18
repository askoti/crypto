import React from "react";
import { links } from "../assets/somedata";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useCoinsContext } from "../context/CoinsContext";

const Navbar = () => {
  const { toggleSidebar, sidebar, setSidebar } = useCoinsContext();
  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">
          <h1>Crypto 23</h1>
        </div>
        <div className="links">
          <ul className="navbar-ul">
            {links.map(({ name, url }) => (
              <li key={name} className="navbar-li">
                <Link to={url}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-button">
          <button className="nav-btn">Lunch App</button>
        </div>
      </div>
      <div className="sidebar">
        <div className="sidebar-logo">
          <h1>Crypto 23</h1>
        </div>
        <div className="sidebar-content">
          <button
            style={{ float: "right", display: "block" }}
            onClick={toggleSidebar}
            className="btn"
          >
            {sidebar ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      <div className={`sidebar-contain ${sidebar ? 'open' : ''}`}>
        <ul
          className="sidebar-ul"
          style={{ display: `${sidebar ? "inline" : "none"}` }}
        >
          {links.map(({ name, url }) => (
            <li key={name} className="sidebar-li">
              <Link to={url} onClick={() => setSidebar(false)}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
