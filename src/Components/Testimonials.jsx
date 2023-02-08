import React from "react";
import Testimonal from "./Testimonal";

const Testimonials = () => {
  return (
    <div>
      <div className="w-full   xl:px-[14rem] lg:px-[9rem] px-[1rem] bg-white justify-center items-center flex mb-[10rem]">
        <div className=" rounded-xl lg:rounded-[3rem] w-full bg-[#F4F0EC] text-center">
          <p className="text-2xl lg:text-[1.58rem] mt-8 mb-4">
            What the People Thinks <br /> About Us
          </p>
          <div className="grid sm:grid-cols-3 place-items-center justify-evenly gap-4  px-4 md:px-6 lg:px-6 pb-10">
            <Testimonal
              name="Nattasha Mith"
              image="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              location="Sydney, USA"
              text="  Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum
          has been."
            />
            <Testimonal
              name="Raymond Galario"
              image="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              location="Sydney, Australia"
              text=" Lorem Ipsum is simply dummy 
              text of the typesetting industry. 
              Ipsum has been scrambled it 
              to make a type book.."
            />
            <Testimonal
              name="Nattasha Mith"
              image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              location="Sydney, USA"
              text="  Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum
        has been."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
