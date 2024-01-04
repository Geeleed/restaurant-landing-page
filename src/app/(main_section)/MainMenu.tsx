"use client";

import Image from "next/image";
import React from "react";

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
const data = [
  {
    image_address:
      "https://images.unsplash.com/photo-1599122759357-66745a5c36ce?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TUVBVHxlbnwwfHwwfHx8MA%3D%3D",
    title: "MEAT",
    menu: [
      {
        menu_name: "Grilled Chicken Tenders",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
        price: "12.00$",
      },
      {
        menu_name: "Veggie Burger",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
        price: "12.00$",
      },
      {
        menu_name: "Whole Chicken",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
        price: "12.00$",
      },
      {
        menu_name: "Meal Platter",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
        price: "12.00$",
      },
      {
        menu_name: "Chicken Breast Burger",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
        price: "12.00$",
      },
      {
        menu_name: "Full Platter",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
        price: "12.00$",
      },
    ],
  },
  {
    image_address:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RklTSCUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
    title: "FISH",
    menu: [
      {
        menu_name: "Jumbo Platter",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
        price: "12.00$",
      },
      {
        menu_name: "Something Exotic",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
        price: "12.00$",
      },
      {
        menu_name: "Mediterranean Salad",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
        price: "12.00$",
      },
      {
        menu_name: "Veg Espetada",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
        price: "12.00$",
      },
      {
        menu_name: "Algarve Salad",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
        price: "12.00$",
      },
      {
        menu_name: "Cataplana Algarve",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
        price: "12.00$",
      },
    ],
  },
  {
    image_address:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VkVHRVRBUklBTnxlbnwwfHwwfHx8MA%3D%3D",
    title: "VEGETARIAN",
    menu: [
      {
        menu_name: "Spicy Rice",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
        price: "12.00$",
      },
      {
        menu_name: "Feta Cheese",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
        price: "12.00$",
      },
      {
        menu_name: "Grilled Vegetables",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
        price: "12.00$",
      },
      {
        menu_name: "Citrus Bliss",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
        price: "12.00$",
      },
      {
        menu_name: "Three Bean Salad",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
        price: "12.00$",
      },
      {
        menu_name: "Madeira Red",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
        price: "12.00$",
      },
    ],
  },
  {
    image_address:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D",
    title: "DESSERT",
    menu: [
      {
        menu_name: "Creamy Cheesecake",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
        price: "12.00$",
      },
      {
        menu_name: "Fresh Lime Soda",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
        price: "12.00$",
      },
      {
        menu_name: "Choco Cake",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
        price: "12.00$",
      },
      {
        menu_name: "Portuguese Lemonade",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
        price: "12.00$",
      },
      {
        menu_name: "Bottled Water",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
        price: "12.00$",
      },
      {
        menu_name: "Fruit Juice",
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
        menu_name: "Sake",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
        price: "12.00$",
      },
      {
        menu_name: "Dry-Aged Rib-Eye",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
        price: "12.00$",
      },
      {
        menu_name: "Braised Lamb",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
        price: "12.00$",
      },
      {
        menu_name: "Coke",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
        price: "12.00$",
      },
      {
        menu_name: "Pepsi",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
        price: "12.00$",
      },
      {
        menu_name: "Water",
        detail:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque perferendis beatae numquam incidunt. Nulla!",
        price: "12.00$",
      },
    ],
  },
];
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
