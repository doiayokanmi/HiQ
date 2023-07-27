import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <>
      <nav className="fixed w-screen bg-white">
        <div className="flex text-primary items-center gap-1 font-semibold">
          
            <Image src={'/hiq_logo-removebg-preview.png'} alt="HiQ Logo" width={60} height={20} />
        </div>

        <div className="links absolute md:static md:inline-block overflow-hidden">
          <Link href="">
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

        <div>
          <Link href="" className="sign">
            Sign In / Register
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
