'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import Services from "./Services";



const Hero = () => {
  return (
    <>
      <div id="hero" className="text-white h-screen">
        <div
          id="innerHero"
          className=""
        >
          <h1 className="text-8xl uppercase">HiQ Technology</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ab
            commodi doloremque rem iure veniam aliquam consequuntur reiciendis,
            temporibus maiores corporis, sapiente quasi tenetur eaque tempora
            error dolorum laboriosam! Tempora?
          </p>

          <div className="w-full flex justify-center p-2">
            <input type="text" className="w-3/6 p-2 border-0 focus:border-0" placeholder="example@email.com" />

            <button className="sign">Subscribe</button>
          </div>

        </div>

      </div>
        <Services />
    </>
  );
};

export default Hero;
