import React from "react"
import { NavLink, Outlet } from "react-router-dom"

const Navbar = () => {
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
  
  return (
    <div>
      <nav className="navBar">
        <ul>
          {links.map(link => {
            return <li key={link.id}><NavLink to={link.path} className={({ isActive }) => (isActive) ? 'active-link' : ''}>{link.text}</NavLink></li>
          })}
        </ul>
      </nav>
      <Outlet />
    </div>
  )  
}
export default Navbar
