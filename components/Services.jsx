import React from "react";
import { icons } from "react-icons";

const Services = () => {
  const serviceList = [
    {
      title: "Adelododun",
      color: "bg-primary",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, eos!",
      icon: "",
    },
    {
        title: "Adelododun",
        color: "bg-primary",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, eos!",
        icon: "",
      },
      {
        title: "Adelododun",
        color: "bg-primary",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, eos!",
        icon: "",
      },
      {
        title: "Adelododun",
        color: "bg-primary",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, eos!",
        icon: "",
      }
  ];
  return (
    <>
      <div className="w-11/12 bg-transparent absolute px-24 rounded -bottom-36">
        <div className="flex justify-between p-8 gap-5">
          {serviceList.map((item, index) => (
            <div key={index} className="w-1/4 rounded p-4 text-center bg-white text-primary hover:bg-primary hover:text-white hover:shadow-none shadow shadow-slate-400">
            <h1 className="text-">{item.title}</h1>
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
