import React, { useEffect, createRef } from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-inner">
          <Link to="/" className="nav-icon-container">
            <span className="nav-icon">V</span>
          </Link>
        </div>
        <div className="nav-toggle">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <div className="nav-desktop">
          <Link className="nav-link mr-10" to="/services">
            Services
          </Link>
          <Link className="nav-link mr-10" to="/portfolio">
            Portfolio
          </Link>
          <Link className="nav-link btn--blue-outline" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
