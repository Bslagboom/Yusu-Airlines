import { Link } from "react-router-dom";
import { useState } from "react";
import "../App"

function Nav() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-title">Yusu Airlines</div>
      <div className="navbar-links">
        <Link to="../Pages/Home.jsx">Home</Link>
        <div
          className="dropdown"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <span className="dropdown-title">Over ons ▾</span>
          {dropdown && (
            <div className="dropdown-menu">
              <Link to="/vloot">Yusu Vloot</Link>
              <Link to="/crew">Yusu Crew</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;