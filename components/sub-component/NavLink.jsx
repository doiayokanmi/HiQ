import Link from 'next/link'
import React from 'react'

const NavLink = () => {
  return (
    <>
        <div className="links absolute md:static md:inline-block overflow-hidden">
          <Link href="/">
            Home
          </Link>
          <Link href="">
            About
          </Link>
          <Link href="">
            Contact
          </Link>
          <Link href="">
            Gallery
          </Link>
          <Link href="">
            FAQs
          </Link>
        </div>
    </>
  )
}

export default NavLink