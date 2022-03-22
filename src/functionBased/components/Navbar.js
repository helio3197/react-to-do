import React, { useState } from "react"
import { NavLink, Outlet } from "react-router-dom"
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const links = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/about",
      text: "About",
    },
  ]

  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }
  
  return (
    <div>
      <nav className="navBar">
        <button onClick={handleToggle}>
          {(navbarOpen) ? (
            <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
          ) : (
            <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
          )}
        </button>
        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
          {links.map(link => {
            return (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  onClick={() => closeMenu()}
                  className={({ isActive }) => (isActive) ? 'active-link' : ''}
                >
                  {link.text}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
      <Outlet />
    </div>
  )  
}
export default Navbar
