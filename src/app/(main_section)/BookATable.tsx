import React from "react";

function BookATable() {
  return (
    <div className=" bg-[url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] w-full h-[80vh] bg-center bg-no-repeat relative z-1 flex justify-center items-center">
      {/* <div> */}
      <div className=" bg-black opacity-50 w-full h-full absolute z-2"></div>
      <div className=" w-1/3 flex flex-col gap-5 text-center z-[3] max-[769px]:w-2/3">
        <h1 className="text-[2rem] font-bold leading-none">BOOK A TABLE</h1>
        <p className=" text-gray-100 leading-none text-[0.9rem]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          asperiores dolorem illum laudantium explicabo, qui cumque perferendis
          ab magnam tempora.
        </p>
        <form className="flex flex-col gap-3 text-black">
          <input className="p-2" type="text" placeholder="Your Name" />
          <input className="p-2" type="email" placeholder="E-mail" />
          <textarea placeholder="Your Message" className="p-2" />
          <button className=" border-white border-2 rounded-md py-2 hover:opacity-80 cursor-pointer text-white">
            BOOK TABLE
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookATable;
