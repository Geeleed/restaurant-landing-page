import React from "react";
import Navbar from "./(main_section)/Navbar";
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

function Root() {
  return (
    <div>
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
    </div>
  );
}

export default Root;
