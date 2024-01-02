import Image from "next/image";
import React from "react";
const data = [
  {
    image_address:
      "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
    title: "WARM HUMMUS WITH SPICED LAMB",
    detail:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores ut unde quos quam quidem reprehenderit!",
  },
  {
    image_address:
      "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
    title: "WARM HUMMUS WITH SPICED LAMB",
    detail:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores ut unde quos quam quidem reprehenderit!",
  },
  {
    image_address:
      "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
    title: "WARM HUMMUS WITH SPICED LAMB",
    detail:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores ut unde quos quam quidem reprehenderit!",
  },
];

function OurBlog() {
  return (
    <div className="flex flex-col items-center bg-white text-black pb-20">
      <div className="p-10 text-center flex flex-col items-center">
        <h1 className=" text-[2rem] font-bold">OUR BLOG</h1>
        <p className=" w-1/2 text-gray-500 text-[0.9rem]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
          magni doloribus itaque eaque distinctio veniam veritatis nobis!
          Recusandae, exercitationem corrupti?
        </p>
      </div>
      <div className="flex px-[10%] gap-5">
        {data.map((elem, index) => (
          <Card key={index} props={elem} />
        ))}
      </div>
    </div>
  );
}

export default OurBlog;

function Card({ props }: any) {
  const { image_address, title, detail } = props;
  return (
    <div className=" w-full flex flex-col gap-3">
      <div className=" w-full h-full overflow-hidden">
        <Image
          src={image_address}
          height={100}
          width={100}
          alt=""
          className=" w-full hover:scale-150 transition-all hover:opacity-70 cursor-pointer"
        />
      </div>
      <h1>{title}</h1>
      <p className=" text-[0.9rem] text-gray-500">{detail}</p>
    </div>
  );
}
