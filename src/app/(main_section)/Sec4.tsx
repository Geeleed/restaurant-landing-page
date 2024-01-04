import Image from "next/image";
import React from "react";

function Sec4() {
  return (
    <div className=" bg-[url(https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-center bg-no-repeat bg-cover h-[80vh]">
      <div className="flex flex-col gap-5 w-[40%] bg-orange-100 text-black h-full items-center justify-center text-center p-20 max-[769px]:p-7 max-[426px]:w-full">
        <Image
          src={
            "https://images.unsplash.com/photo-1518148750009-25b2522df9c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hlZiUyMGhhdHxlbnwwfHwwfHx8MA%3D%3D"
          }
          height={100}
          width={100}
          alt=""
          className="rounded-md"
        />
        <p>Specialty of the Restaurant</p>
        <p className="font-bold text-[3rem] leading-none max-[1025px]:text-[2rem]">
          DISCOVER OUR TASTY MEALS
        </p>
        <p className="text-gray-700 max-[1025px]:text-[0.8rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
          dignissimos dolorem repellat dolor consequuntur cumque id harum veniam
          quia in adipisci ex atque sunt at, expedita sit saepe ad facilis.
        </p>
        <div className=" border-2 border-gray-500 px-10 py-3 rounded-md hover:opacity-80 cursor-pointer">
          BOOK A TABLE
        </div>
      </div>
    </div>
  );
}

export default Sec4;
