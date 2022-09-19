import React from 'react'
import { NavLink, Link } from "react-router-dom";
export const Navbar = () => {
    return (
      <Navbar>
          <NavLink exact activeClassName="active" to="/about">
              <Link to="/about">about</Link>
          </NavLink>
          <NavLink exact activeClassName="active" to="/portfolio">
              <Link to="/portfolio">portfolio</Link>
          </NavLink>
          <NavLink exact activeClassName="active" to="/contact">
              <Link to="/contact">contact</Link>
          </NavLink>
          <NavLink exact activeClassName to="/resume">
              <Link to="/resume">resume</Link>
          </NavLink>
      </Navbar>
    )
}