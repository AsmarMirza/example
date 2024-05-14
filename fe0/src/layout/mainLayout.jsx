import React from 'react'
import Navbar from './navbar'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
  )
}

export default MainLayout