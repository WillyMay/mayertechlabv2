import { Outlet, Link } from 'react-router-dom'
import React from 'react'

function Navbar() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
      </ul>
    </nav>

    <Outlet />
  </>
  )
}

export default Navbar