import React from "react";
import TopSec from "./(main_section)/TopSec";
import Sec2 from "./(main_section)/Sec2";
import Sec3 from "./(main_section)/Sec3";
import Sec4 from "./(main_section)/Sec4";
import MainMenu from "./(main_section)/MainMenu";
import FoodGallery from "./(main_section)/FoodGallery";
import MeetOurChef from "./(main_section)/MeetOurChef";
import Sec8 from "./(main_section)/Sec8";
import OurBlog from "./(main_section)/OurBlog";
import Sec9 from "./(main_section)/Sec9";
import BookATable from "./(main_section)/BookATable";
import Navbar from "./(main_section)/Navbar";

function Root() {
  return (
    <div className="">
      <Navbar />
      <TopSec />
      <Sec2 />
      <Sec3 />
      <Sec4 />
      <MainMenu />
      <FoodGallery />
      <MeetOurChef />
      <Sec8 />
      <OurBlog />
      <Sec9 />
      <BookATable />
      <footer className=" bg-black text-white text-center p-5">
        {
          "This reference and inspiration from: http://www.themezaa.com/html/leadgen/demo/restaurant/index.html"
        }
      </footer>
    </div>
  );
}

export default Root;
