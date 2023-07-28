import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLink from "./sub-component/NavLink";

const Navigation = () => {
  return (
    <>
      <nav className="fixed w-screen bg-white border-b-2 border-b-primary">
        <div className="flex text-primary items-center gap-1 font-semibold">
          
            <Image src={'/hiq_logo-removebg-preview.png'} alt="HiQ Logo" width={60} height={20} />
        </div>

        <NavLink />

        <div>
          <Link href="signin" className="sign">
            Sign In / Register
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
