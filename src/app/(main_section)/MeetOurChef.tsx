import Image from "next/image";
import React from "react";

const data = [
  {
    chef_name: "Geeleed",
    chef_role: "Master",
    detail1:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione dolore impedit omnis excepturi quos fugiat accusamus minus ipsa modi et.",
    detail2:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione dolore impedit omnis excepturi quos fugiat accusamus minus ipsa modi et.",
    chef_image_address:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlZnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    chef_name: "Geeleed 2",
    chef_role: "Master 2",
    detail1:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione dolore impedit omnis excepturi quos fugiat accusamus minus ipsa modi et.",
    detail2:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione dolore impedit omnis excepturi quos fugiat accusamus minus ipsa modi et.",
    chef_image_address:
      "https://images.unsplash.com/photo-1654922207993-2952fec328ae?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q0hFRnxlbnwwfHwwfHx8MA%3D%3D",
  },
];
function MeetOurChef() {
  return (
    <div
      id="chefs"
      className=" w-full flex flex-col items-center bg-white text-black pt-[5rem]"
    >
      <div className=" text-center p-10">
        <h1 className="text-[2rem] font-bold">MEET OUR CHEF</h1>
        <p className=" text-[0.9rem] text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum corporis
          rem, harum at suscipit quasi.
        </p>
      </div>
      <div className="flex w-[90vw] overflow-x-auto snap-mandatory snap-x">
        {data.map((elem, index) => (
          <Chef key={index} props={elem} />
        ))}
      </div>
    </div>
  );
}

export default MeetOurChef;

function Chef({ props }: any) {
  return (
    <div className="flex justify-center min-w-[101%] snap-center max-[426px]:flex-col-reverse ">
      <div className=" flex flex-col justify-center p-10 gap-3 text-left w-1/2 max-[426px]:w-full">
        <h1 className="font-bold text-[1.5rem]">{props.chef_name}</h1>
        <p className="text-gray-500">{props.chef_role}</p>
        <p>{props.detail1}</p>
        <p className="text-[0.9rem]">{props.detail2}</p>
      </div>
      <Image
        src={props.chef_image_address}
        height={500}
        width={500}
        alt=""
        className=" w-auto h-[30rem]"
      />
    </div>
  );
}
