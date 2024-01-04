"use client";

import Image from "next/image";
import React from "react";
import { data } from "./data";

function MainMenu() {
  return (
    <div id="menu" className="pt-10">
      <Top />
      <Mid />
    </div>
  );
}

export default MainMenu;

function Top() {
  return (
    <div className=" w-full text-center bg-white text-black pt-20 flex flex-col items-center gap-1">
      <h1 className="text-[2rem] font-bold">MAIN MENU</h1>
      <p className=" w-1/2 text-gray-500 text-[0.9rem] max-[426px]:w-[80%] max-[426px]:text-[0.7rem]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi maiores
        dicta ad odio iste, necessitatibus non! Officia obcaecati, at maxime vel
        corporis magnam ea ullam!
      </p>
    </div>
  );
}
function Mid() {
  const [bott, setBott] = React.useState<JSX.Element>(<Bott elem={data[0]} />);
  return (
    <div className=" w-full bg-white text-black">
      <div className="flex flex-wrap justify-center gap-10 text-center p-5">
        {data.map((elem, index) => (
          <div key={index}>
            <div className="flex flex-col items-center gap-3">
              <Image
                onClick={() => setBott(<Bott elem={elem} />)}
                src={elem.image_address}
                height={100}
                width={100}
                alt=""
                className=" w-[5rem] h-[5rem] rounded-full cursor-pointer hover:scale-110 transition-all"
              />
              <p className="text-[0.8] text-gray-500">{elem.title}</p>
            </div>
          </div>
        ))}
      </div>
      {bott}
    </div>
  );
}
function Bott({ elem }: any) {
  return (
    <div className="grid grid-cols-3 gap-5 px-[10%] max-[426px]:grid-cols-1">
      {elem.menu.map((elem: any, index: number) => (
        <div key={index} className=" border-b border-gray-100 p-5">
          <h1 className="font-bold text-[1.1rem]">{elem.menu_name}</h1>
          <p className=" text-gray-500 text-[0.9rem]">{elem.detail}</p>
          <p className="font-bold text-orange-400">{elem.price}</p>
        </div>
      ))}
    </div>
  );
}
