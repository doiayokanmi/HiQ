import React from "react";
import CoursesCard from "./sub-component/CoursesCard";
import Link from "next/link";

const Courses = () => {

  const courses = [
    {
      title: 'HTML 5 Crash Courses with Materials',
      image: '/hiq_logo-removebg-preview.png',
      price: '3500',
      author: 'Adewale Damilola'
    },
    {
      title: 'HTML 5 Crash Courses with Materials',
      image: '/hiq_logo-removebg-preview.png',
      price: '3500',
      author: 'Adewale Damilola'
    },
    {
      title: 'HTML 5 Crash Courses with Materials',
      image: '/hiq_logo-removebg-preview.png',
      price: '3500',
      author: 'Adewale Damilola'
    }
  ]
  return (
    <>
      <section className="md:px-24 px-4 pb-5">
        <h1 className="text-primary text-xl font-bold">Our Courses</h1>

        <div className="flex justify-between flex-wrap items-center py-2">
          <div className="w-full md:w-auto">
            <h1 className="text-2xl font-bold">
              Our Most <span className="text-primary">Popular</span> Courses{" "}
            </h1>
          </div>
          <div className="flex gap-3 w-full mt-4 md:mt-0 md:w-auto">
            <button className="sign mr-3">Recent </button>
            <button className="sign mr-3">Popular </button>
            <button className="sign">Popular </button>
          </div>
        </div>

        <hr />
        <CoursesCard courses={courses} />

        <div className="right">
          <Link href='' className="sign">See More Courses</Link>
        </div>
      </section>
    </>
  );
};

export default Courses;
