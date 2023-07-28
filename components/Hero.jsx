import React from "react";

const Hero = () => {
  return (
    <>
      <div id="hero" className="text-white h-screen">
        <div
          id="innerHero"
        >
          <h1 className="text-4xl md:text-6xl uppercase">HiQ Technology</h1>
          <p className="md:text-xl my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ab
            commodi doloremque rem iure veniam aliquam consequuntur reiciendis,
            temporibus maiores corporis, sapiente quasi tenetur eaque tempora
            error dolorum laboriosam! Tempora?
          </p>

          <div className="w-full flex justify-center p-2">
            <input type="text" className="md:w-3/6 w-4/6 p-2 border-0 focus:border-0" placeholder="example@email.com" />

            <button className="sign">Subscribe</button>
          </div>

        </div>

      </div>
    </>
  );
};

export default Hero;
