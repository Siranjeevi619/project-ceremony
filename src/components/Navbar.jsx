import React from "react";
import { useTheme } from "./ThemeContext";

import "../assets/styles/navbar.css";

const Navbar = () => {
  const { isDarkTheme, toggleTheme, currentTheme } = useTheme();

  return (
    <nav
      className="navbar navbar-expand-lg shadow border-bottom"
      style={{
        backgroundColor: currentTheme.backgroundColor,
        borderBottom: isDarkTheme ? "1px solid white" : "1px solid black",
        color: currentTheme.color,
      }}
    >
      <div className="container-fluid">
      
        <a
          className="navbar-brand fw-bold ms-md-5"
          href="#"
          style={{ color:  "#0288D1" }}
        >
          ✦ Splendid Space
        </a>

        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className="navbar-toggler-icon"
            style={{ backgroundColor: isDarkTheme ? "#ffffff" : "#000000" }}
          ></span>
        </button>

      
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {["Planning tools", "Vendors", "Dresses", "Ideas", "Contacts"].map(
              (item) => (
                <li className="nav-item" key={item}>
                  <a
                    className="nav-link"
                    href="#"
                    style={{ color: currentTheme.color }}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>

      
          <div className="d-flex align-items-center gap-3">
            <i
              className={`bi bi-person-circle person-icon ${
                isDarkTheme ? "text-light" : "text-dark"
              }`}
              style={{ fontSize: "1.5rem", cursor: "pointer" }}
              title="Profile"
            ></i>

           
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              <div className={`icon ${isDarkTheme ? "moon" : "sun"}`}></div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
