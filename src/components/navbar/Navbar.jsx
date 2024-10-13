import React from 'react'
import NavLink from './NavLink'

export default function Navbar({children}) {
  return (
      <div className={`flex items-center justify-center gap-8 pt-8 mx-auto bg-${children}`}>
        <NavLink href="/home">Home</NavLink>
        <NavLink href="/services">Services</NavLink>
        <NavLink href="/pricings">Pricings</NavLink>
    </div>
  )
}
