import React from "react";
import CommonBtn from "../_components/Utilites/CommonBtn/CommonBtn";
import { MdOutlineArrowOutward } from "react-icons/md";

const Page = () => {
  return (
    <div className="h-screen bg-white">
      <div className="flex flex-col h-full justify-center items-center">
        <h2 className="flex justify-center items-center title ">
          Page under working
        </h2>

        <div className="mt-10">
          <CommonBtn
            btnText="Back to home"
            url="/"
            icon={MdOutlineArrowOutward}
            className="shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
