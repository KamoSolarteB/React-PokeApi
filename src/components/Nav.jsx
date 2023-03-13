import React from 'react'
import { Outlet } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <h1>Navigation</h1>
      <Outlet/>
    </div>
  )
}

export default Nav