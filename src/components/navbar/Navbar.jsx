import React from 'react'
import NavLink from './NavLink'

export default function Navbar() {
  return (
      <div className='flex items-center justify-center gap-8 py-3 mx-auto bg-black'>
        <NavLink href="/home">Home</NavLink>
        <NavLink href="/services">Services</NavLink>
    </div>
  )
}
