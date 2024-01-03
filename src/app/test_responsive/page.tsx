import React from "react";

function Page() {
  return (
    <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-3">
      <div className=" border-2 border-red-500 w-auto h-auto row-span-2">1</div>
      <div className=" border-2 border-red-500 w-auto h-80 flex justify-center items-center">
        2
      </div>
      <div className=" border-2 border-red-500 w-auto h-80 col-span-2">3</div>
      <div className=" border-2 border-red-500 w-auto h-auto row-span-2 col-span-2">
        4
      </div>
      <div className=" border-2 border-red-500 w-auto h-80 justify-center items-center">
        5
      </div>
      <div className=" border-2 border-red-500 w-auto h-40">6</div>
      <div className=" border-2 border-red-500 w-auto h-80">7</div>
      <div className=" border-2 border-red-500 w-auto h-auto">8</div>
    </div>
  );
}

export default Page;
