import React from "react"
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return  (
    <div>
      <ul>
        <li>
          <Link to={`/about/about-app`}>About App</Link>
        </li>
        <li>
          <Link to={`/about/about-author`}>About Author</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}
export default About
