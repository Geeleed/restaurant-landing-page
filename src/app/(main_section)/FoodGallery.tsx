"use client";
import Image from "next/image";
import React from "react";

const data = [
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Rk9PRHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Rk9PRHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Rk9PRHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEZPT0R8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEZPT0R8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fEZPT0R8ZW58MHx8MHx8fDA%3D",
];

function FoodGallery() {
  return (
    <div id="gallery" className=" bg-white text-black pt-20">
      <div className=" w-full text-center p-10 flex flex-col items-center">
        <h1 className="text-[2rem] font-bold">FOOD GALLERY</h1>
        <p className=" w-1/2 text-gray-500 text-[0.9rem] max-[769px]:w-2/3 max-[426px]:text-[0.7rem] max-[426px]:w-full">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
          consequuntur eveniet dolorum omnis aperiam eum eligendi rem ad atque
          ipsum?
        </p>
      </div>
      <div className="grid grid-cols-3 gap-1 max-[426px]:grid-cols-1">
        {data.map((image_address, index) => (
          <div
            key={index}
            className=" w-full h-80 overflow-hidden flex justify-center items-center"
          >
            <Image
              src={image_address}
              height={500}
              width={500}
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
