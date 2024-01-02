"use client";
import Image from "next/image";
import React from "react";

const data = [
  "https://images.unsplash.com/photo-1556191041-c2401936d851?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJyZWFrZmFzdHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1556191041-c2401936d851?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJyZWFrZmFzdHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1556191041-c2401936d851?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJyZWFrZmFzdHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1556191041-c2401936d851?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJyZWFrZmFzdHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1556191041-c2401936d851?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJyZWFrZmFzdHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1556191041-c2401936d851?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJyZWFrZmFzdHxlbnwwfHwwfHx8MA%3D%3D",
];

function FoodGallery() {
  return (
    <div className=" bg-white text-black">
      <div className=" w-full text-center p-10 flex flex-col items-center">
        <h1 className="text-[2rem] font-bold">FOOD GALLERY</h1>
        <p className=" w-1/2 text-gray-500 text-[0.9rem]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
          consequuntur eveniet dolorum omnis aperiam eum eligendi rem ad atque
          ipsum?
        </p>
      </div>
      <div className="grid grid-cols-3 gap-1">
        {data.map((image_address) => (
          <div className=" w-full h-full overflow-hidden">
            <Image
              src={image_address}
              height={1000}
              width={1000}
              alt=""
              className="w-full hover:scale-150 transition-all"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodGallery;
