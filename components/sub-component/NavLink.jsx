import Link from "next/link";
import React from "react";

const NavLink = ({ isMenu }) => {
  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Contact",
      link: "/contact",
    },
    {
      title: "Gallery",
      link: "/gallery",
    },
    {
      title: "FAQs",
      link: "/faqs",
    },
  ];
  return (
    <>
      <div className={`links`}>
        {
          links.map((items, index) => (
          <Link key={index} href={items.link} className='p-4 w-full border-b-2 border-b-primary'>
            {items.title}
          </Link>
          ))
        }
      </div>
    </>
  );
};

export default NavLink;
