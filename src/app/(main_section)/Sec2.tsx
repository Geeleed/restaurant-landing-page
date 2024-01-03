import React from "react";
import Image from "next/image";

export default function Sec2() {
  return (
    <div className="flex bg-white text-black px-[10%] py-5 items-center border-b border-gray-100 gap-5 max-[426px]:flex-col">
      <div className="w-1/2 max-[426px]:w-full">
        <Image
          src={
            "https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1547&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          height={500}
          width={100}
          alt=""
          className=" h-[30rem] w-auto"
        />
      </div>
      <div className=" w-1/2 flex flex-col gap-5  max-[426px]:w-full">
        <h1 className="font-bold text-[2rem] leading-none max-[769px]:text-[1.7rem]">
          The best food in town at one of the best locations!!!
        </h1>
        <h2 className="text-[1.3rem] max-[769px]:text-[1rem]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem sint sequi repellat necessitatibus quasi eius?
        </h2>
        <h3 className=" text-gray-500 max-[769px]:text-[0.7rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aut
          amet pariatur facilis vero dignissimos minus quod maxime molestiae
          sint perspiciatis nam, voluptas voluptatem! Dolores culpa a et
          cupiditate quasi.
        </h3>
        <div className=" border-2 border-orange-500 rounded-lg text-orange-500 px-7 py-2 w-fit cursor-pointer hover:opacity-80">
          EXPLORE MENU
        </div>
      </div>
    </div>
  );
}
