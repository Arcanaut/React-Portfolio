import React from 'react'
import { NavLink, Link } from "react-router-dom";

export const Navbar = () => {
    return (
      <Navbar>
          <NavLink>
              <Link to="/about">about</Link>
          </NavLink>
          <NavLink>
              <Link to="/portfolio">portfolio</Link>
          </NavLink>
          <NavLink>
              <Link to="/contact">contact</Link>
          </NavLink>
          <NavLink>
              <Link to="/resume">resume</Link>
          </NavLink>
      </Navbar>
    )
}