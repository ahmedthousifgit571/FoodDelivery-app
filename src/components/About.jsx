import React from 'react'
import { Outlet } from 'react-router-dom'

function About() {
  return (
    <div className="body-container">
      <h1 className='text-red-600'>About Us</h1>
      <p className='text-blue-500'>This is learning journey of react concepts </p>
      <Outlet />
    </div>
  )
}

export default About
