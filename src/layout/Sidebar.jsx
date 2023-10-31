import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'

function Sidebar({children}) {
  return (
    <div>
        <Link to="/contact">Contact </Link>
        <Link to="/about">About </Link>
        {children}
    </div>
  )
}

export default Sidebar