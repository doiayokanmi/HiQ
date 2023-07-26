import React from "react";

const Courses = () => {
  return (
    <>
      <section className="px-24 pb-5">
        <h1 className="text-primary text-xl font-bold">Our Courses</h1>

        <div className="flex justify-between items-center py-2">
          <div>
            <h1 className="text-3xl font-bold">
              Our Most <span className="text-primary">Popular</span> Courses{" "}
            </h1>
          </div>
          <div className="flex gap-2">
            <button className="sign">Recent</button>
            <button className="sign">Popular</button>
            <button className="sign">Popular</button>

          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
