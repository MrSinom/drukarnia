import { NavLink } from "react-router-dom";
import "./navbar.style.css";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <NavLink
            to="/"
            end
            className="logo"
            onClick={closeMenu}
          >
            AOSOS
          </NavLink>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          

          <NavLink
            to="/about"
            className="nav-link"
            onClick={closeMenu}
          >
            O nas
          </NavLink>
          <NavLink to="/offer" className="nav-link" onClick={closeMenu}>
            Oferta
          </NavLink>

          <NavLink
            to="/contact"
            className="nav-link"
            onClick={closeMenu}
          >
            Kontakt
          </NavLink>

          <NavLink
            to="/gallery"
            className="nav-link"
            onClick={closeMenu}
          >
            Galeria
          </NavLink>

          <NavLink
            to="/preparation"
            className="nav-link"
            onClick={closeMenu}
          >
            Przygotowanie
          </NavLink>
        </nav>

        <button
          className="burger"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
