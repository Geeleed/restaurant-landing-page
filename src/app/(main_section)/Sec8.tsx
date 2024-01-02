import React from "react";

function Sec8() {
  return (
    <div className=" flex flex-col gap-10 items-center bg-[url(https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-[70vh] justify-center overflow-hidden relative text-white text-center">
      <div className=" bg-black opacity-50 w-full h-full absolute"></div>
      <h1 className=" z-10 text-[3rem] w-1/2 leading-none">
        Amazing restaurant come and experience inspired cooking!
      </h1>
      <div className=" px-10 py-2 border-2 rounded-md border-white z-10 hover:opacity-80 cursor-pointer">
        BOOK A TABLE
      </div>
    </div>
  );
}

export default Sec8;
