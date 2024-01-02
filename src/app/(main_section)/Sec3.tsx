import React from "react";
import Image from "next/image";

const data = [
  {
    image_address:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "BREAKFAST",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illo corrupti, qui ad sit laudantium.",
  },
  {
    image_address:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "LUNCH",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illo corrupti, qui ad sit laudantium.",
  },
  {
    image_address:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "DINNER",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illo corrupti, qui ad sit laudantium.",
  },
  {
    image_address:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "DRINKS",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illo corrupti, qui ad sit laudantium.",
  },
];

interface Card1_props {
  image_address: string;
  title: string;
  detail: string;
}
function Card1(props: Card1_props) {
  return (
    <div className="flex flex-col items-center text-center gap-3 w-1/5">
      <Image
        src={props.image_address}
        height={100}
        width={100}
        alt=""
        className=" rounded-full w-[5rem] h-[5rem]"
      />
      <p>{props.title}</p>
      <p className="text-[0.8rem] text-gray-500">{props.detail}</p>
    </div>
  );
}
export default function Sec3() {
  return (
    <div className="flex bg-white text-black p-10 gap-10 px-[10%] justify-center items-center h-[50vh]">
      {data.map((elem, index) => (
        <Card1
          key={index}
          image_address={elem.image_address}
          title={elem.title}
          detail={elem.detail}
        />
      ))}
    </div>
  );
}