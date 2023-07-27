import Image from "next/image";
import Link from "next/link";
import React from "react";

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
            <button className="sign">Recent </button>
            <button className="sign">Popular </button>
            <button className="sign">Popular </button>
          </div>
        </div>

        <hr />

        <div className="flex justify-between flex-wrap md:flex-nowrap gap-8 py-5">
          {
            courses.map((item, index) => (

          <div key={index} className="md:basis-1/3 basis-full border rounded">
            <div>
              <Image
                src={"/bg.jpg"}
                width={400}
                height={200}
                className="w-full h-1/2 rounded-t"
                alt="Courses image"
              />
            </div>
            <div className="p-4">
              <div className="flex gap-2 items-center">
                <Image
                  src={item.image}
                  width={64}
                  height={64}
                  className="rounded-full border"
                  alt="ytttt"
                />
                <h2>{item.author}</h2>
              </div>
              <h1 className="text-xl font-bold my-5">
                {item.title}
              </h1>

              <div className="flex justify-between items-center">
                <p className="font-bold text-2xl text-primary">{`N${item.price}`}</p>
                <Link href="" className="sign">
                  Purchase
                </Link>
              </div>
            </div>
          </div>
            ))
          }
        </div>
      </section>
    </>
  );
};

export default Courses;
