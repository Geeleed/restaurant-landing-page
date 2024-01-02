import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between sticky top-0 p-5 px-[5%] z-20 bg-black">
      <div className=" text-[1.5rem]">Geeleed</div>
      <div className="flex gap-5 justify-center items-center">
        <div className=" cursor-pointer">ABOUT</div>
        <div className=" cursor-pointer">SERVICES</div>
        <div className=" cursor-pointer">MENU</div>
        <div className=" cursor-pointer">GALLERY</div>
        <div className=" cursor-pointer">CHEFS</div>
        <div className=" cursor-pointer">BLOG</div>
        <div className=" cursor-pointer">CONTACT</div>
        <div className=" cursor-pointer">BOOK NOW</div>
      </div>
    </div>
  );
}

export default Navbar;
