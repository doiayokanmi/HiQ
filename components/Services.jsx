import React from "react";
import {FaLaptopCode, FaBug} from 'react-icons/fa'
import {BiCodeAlt, BiSolidPencil} from 'react-icons/bi'



const Services = () => {
  const serviceList = [
    {
      title: "Web Developement",
      color: "bg-primary",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, eos!",
      icon: <FaLaptopCode size={30} color='white' />,
    },
    {
        title: "Technical Writing",
        color: "bg-primary",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, eos!",
        icon: <BiSolidPencil size={30} color='white' />,
      },
      {
        title: "Web Design",
        color: "bg-primary",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, eos!",
        icon: <BiCodeAlt size={30} color='white' />,
      },
      {
        title: "Bug Fixing",
        color: "bg-primary",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, eos!",
        icon: <FaBug size={30} color='white' />,
      }
  ];
  return (
    <>
      <div className="w-full bg-transparent p-4 md:px-24 rounded">
        <div className="flex justify-between gap-4 lg:flex-nowrap flex-wrap">
          {serviceList.map((item, index) => (
            <div key={index} className="serviceList">
            <p className="bg-primary inline-block p-2 rounded mb-2">{item.icon}</p>
            <h1 className="text-xl font-bold uppercase">{item.title}</h1>
            <hr />
              <p>
                {item.para}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
