import React from 'react'
import { Outlet } from 'react-router-dom'

function About() {
  return (
    <div className="body-container">
      <h1>About Us</h1>
      <p>This is learning journey of react concepts </p>
      <Outlet />
    </div>
  )
}

export default About
