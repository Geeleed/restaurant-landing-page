import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between sticky top-0 p-5 px-[5%] z-20 bg-black max-[769px]:flex-col max-[769px]:items-center">
      <div className=" text-[1.5rem] max-[426px]:hidden">Geeleed</div>
      <div className="flex gap-5 justify-center items-center max-[426px]:hidden">
        <div className=" cursor-pointer">ABOUT</div>
        <div className=" cursor-pointer">SERVICES</div>
        <div className=" cursor-pointer">MENU</div>
        <div className=" cursor-pointer">GALLERY</div>
        <div className=" cursor-pointer">CHEFS</div>
        <div className=" cursor-pointer">BLOG</div>
        <div className=" cursor-pointer">CONTACT</div>
        <div className=" cursor-pointer">BOOK NOW</div>
      </div>
      <div className="hidden gap-5 justify-center items-center max-[426px]:flex">
        <div className=" cursor-pointer">A</div>
        <div className=" cursor-pointer">S</div>
        <div className=" cursor-pointer">M</div>
        <div className=" cursor-pointer">G</div>
        <div className=" cursor-pointer">C</div>
        <div className=" cursor-pointer">B</div>
        <div className=" cursor-pointer">C</div>
        <div className=" cursor-pointer">B</div>
      </div>
    </div>
  );
}

export default Navbar;
