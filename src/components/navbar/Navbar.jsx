import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
      <div className='flex gap-6 items-center justify-center bg-transparent'>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contactus">Contact us</Link>
        <Link href="/services">Services</Link>
    </div>
  )
}
