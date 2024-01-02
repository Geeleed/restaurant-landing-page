"use client";

import Image from "next/image";
import React from "react";

function MainMenu() {
  return (
    <div className=" border-b border-gray-100">
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
      <p className=" w-1/2 text-gray-500 text-[0.9rem]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi maiores
        dicta ad odio iste, necessitatibus non! Officia obcaecati, at maxime vel
        corporis magnam ea ullam!
      </p>
    </div>
  );
}
function Mid() {
  const data = [
    {
      image_address:
        "https://images.unsplash.com/photo-1513442542250-854d436a73f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJyZWFrZmFzdHxlbnwwfHwwfHx8MA%3D%3D",
      title: "STARTERS",
      menu: [
        {
          menu_name: "Green Salad",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
          price: "12.00$",
        },
        {
          menu_name: "Eggs Any Style",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
          price: "12.00$",
        },
        {
          menu_name: "Chicken Wings",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
          price: "12.00$",
        },
        {
          menu_name: "Appeteaser Platter",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
          price: "12.00$",
        },
        {
          menu_name: "Spicy Mixed Olives",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
          price: "12.00$",
        },
        {
          menu_name: "Wing Roulette",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
          price: "12.00$",
        },
      ],
    },
    {
      image_address:
        "https://images.unsplash.com/photo-1513442542250-854d436a73f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJyZWFrZmFzdHxlbnwwfHwwfHx8MA%3D%3D",
      title: "MEAT",
      menu: [
        {
          menu_name: "Green Salad",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
          price: "12.00$",
        },
        {
          menu_name: "Eggs Any Style",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
          price: "12.00$",
        },
        {
          menu_name: "Chicken Wings",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
          price: "12.00$",
        },
        {
          menu_name: "Appeteaser Platter",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
          price: "12.00$",
        },
        {
          menu_name: "Spicy Mixed Olives",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
          price: "12.00$",
        },
        {
          menu_name: "Wing Roulette",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
          price: "12.00$",
        },
      ],
    },
    {
      image_address:
        "https://images.unsplash.com/photo-1513442542250-854d436a73f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJyZWFrZmFzdHxlbnwwfHwwfHx8MA%3D%3D",
      title: "FISH",
      menu: [
        {
          menu_name: "Green Salad",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
          price: "12.00$",
        },
        {
          menu_name: "Eggs Any Style",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
          price: "12.00$",
        },
        {
          menu_name: "Chicken Wings",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
          price: "12.00$",
        },
        {
          menu_name: "Appeteaser Platter",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
          price: "12.00$",
        },
        {
          menu_name: "Spicy Mixed Olives",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
          price: "12.00$",
        },
        {
          menu_name: "Wing Roulette",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
          price: "12.00$",
        },
      ],
    },
    {
      image_address:
        "https://images.unsplash.com/photo-1513442542250-854d436a73f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJyZWFrZmFzdHxlbnwwfHwwfHx8MA%3D%3D",
      title: "VEGETARIAN",
      menu: [
        {
          menu_name: "Green Salad",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
          price: "12.00$",
        },
        {
          menu_name: "Eggs Any Style",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
          price: "12.00$",
        },
        {
          menu_name: "Chicken Wings",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
          price: "12.00$",
        },
        {
          menu_name: "Appeteaser Platter",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
          price: "12.00$",
        },
        {
          menu_name: "Spicy Mixed Olives",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
          price: "12.00$",
        },
        {
          menu_name: "Wing Roulette",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
          price: "12.00$",
        },
      ],
    },
    {
      image_address:
        "https://images.unsplash.com/photo-1513442542250-854d436a73f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJyZWFrZmFzdHxlbnwwfHwwfHx8MA%3D%3D",
      title: "DESSERT",
      menu: [
        {
          menu_name: "Green Salad",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
          price: "12.00$",
        },
        {
          menu_name: "Eggs Any Style",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
          price: "12.00$",
        },
        {
          menu_name: "Chicken Wings",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
          price: "12.00$",
        },
        {
          menu_name: "Appeteaser Platter",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
          price: "12.00$",
        },
        {
          menu_name: "Spicy Mixed Olives",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
          price: "12.00$",
        },
        {
          menu_name: "Wing Roulette",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
          price: "12.00$",
        },
      ],
    },
    {
      image_address:
        "https://images.unsplash.com/photo-1513442542250-854d436a73f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJyZWFrZmFzdHxlbnwwfHwwfHx8MA%3D%3D",
      title: "DRINKS",
      menu: [
        {
          menu_name: "Green Salad",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
          price: "12.00$",
        },
        {
          menu_name: "Eggs Any Style",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
          price: "12.00$",
        },
        {
          menu_name: "Chicken Wings",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
          price: "12.00$",
        },
        {
          menu_name: "Appeteaser Platter",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
          price: "12.00$",
        },
        {
          menu_name: "Spicy Mixed Olives",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
          price: "12.00$",
        },
        {
          menu_name: "Wing Roulette",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
          price: "12.00$",
        },
      ],
    },
  ];
  const [bott, setBott] = React.useState<JSX.Element>(<Bott elem={data[0]} />);
  return (
    <div className=" w-full bg-white text-black">
      <div className="flex justify-center gap-10 text-center p-5">
        {data.map((elem, index) => (
          <div key={index}>
            <div className="flex flex-col items-center gap-3">
              <Image
                onClick={() => setBott(<Bott elem={elem} />)}
                src={elem.image_address}
                height={100}
                width={100}
                alt=""
                className=" w-[5rem] h-[5rem] rounded-full hover:cursor-pointer"
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
    <div className="grid grid-cols-3 gap-5 px-[10%]">
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
