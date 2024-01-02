import Image from "next/image";
import React from "react";

function TopSec() {
  return (
    <div>
      <div className=" bg-[url(https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] w-full h-[100vh] bg-center bg-no-repeat bg-cover">
        <div className=" bg-black opacity-50 w-full h-full"></div>
        <div className=" absolute right-1/3 translate-x-1/2 bottom-5 w-1/2 bg-orange-500 p-5 flex flex-col gap-5 border-white border-[5px]">
          <h1 className="text-[5rem] font-bold">BREAKFAST</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            similique praesentium totam eligendi quis maiores hic dolorem,
            perspiciatis deleniti cupiditate?
          </p>
          <div className=" px-7 py-1 border-white border-2 w-fit rounded-md hover:opacity-80 cursor-pointer">
            BUTTON
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSec;
