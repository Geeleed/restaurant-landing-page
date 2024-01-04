import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between sticky top-0 p-5 px-[5%] z-20 bg-black max-[769px]:flex-col max-[769px]:items-center">
      <Link href={"#home"} className=" text-[1.5rem] max-[426px]:hidden">
        Geeleed
      </Link>
      <div className="flex gap-5 justify-center items-center max-[426px]:hidden">
        <Link href={"#about"} className=" cursor-pointer">
          ABOUT
        </Link>
        <Link href={"#services"} className=" cursor-pointer">
          SERVICES
        </Link>
        <Link href={"#menu"} className=" cursor-pointer">
          MENU
        </Link>
        <Link href={"#gallery"} className=" cursor-pointer">
          GALLERY
        </Link>
        <Link href={"#chefs"} className=" cursor-pointer">
          CHEFS
        </Link>
        <Link href={"#blog"} className=" cursor-pointer">
          BLOG
        </Link>
        <Link href={"#contact"} className=" cursor-pointer">
          CONTACT
        </Link>
        <Link href={"#contact"} className=" cursor-pointer">
          BOOK NOW
        </Link>
      </div>
      <div className="hidden gap-5 justify-center items-center max-[426px]:flex">
        <Link href={"#about"} className=" cursor-pointer">
          A
        </Link>
        <Link href={"#services"} className=" cursor-pointer">
          S
        </Link>
        <Link href={"#menu"} className=" cursor-pointer">
          M
        </Link>
        <Link href={"#gallery"} className=" cursor-pointer">
          G
        </Link>
        <Link href={"#chefs"} className=" cursor-pointer">
          C
        </Link>
        <Link href={"#blog"} className=" cursor-pointer">
          B
        </Link>
        <Link href={"#contact"} className=" cursor-pointer">
          C
        </Link>
        <Link href={"#contact"} className=" cursor-pointer">
          B
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
