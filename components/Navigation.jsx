'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./sub-component/NavLink";
import { FiMenu } from 'react-icons/fi'

const Navigation = () => {
  const [isMenu, setIsMenu] = useState(false)

  const toggleMenu = () => {
    setIsMenu(!isMenu)
    console.log(isMenu);
  }
  return (
    <>
      <section className="relative">
      <nav className="fixed w-screen bg-white border-b-2 border-b-primary">
        <div className="flex text-primary items-center gap-1 font-semibold">
          
          <FiMenu className="font-bold text-xl md:hidden cursor-pointer" onClick={toggleMenu} />
            <Image src={'/hiq_logo-removebg-preview.png'} alt="HiQ Logo" width={60} height={20} />
        </div>

        <NavLink isMenu = {isMenu} />

        <div>
          <Link href="signin" className="sign">
            Sign In / Register
          </Link>

        </div>
      </nav>
      </section>
    </>
  );
};

export default Navigation;
