import Link from "next/link";
import React from "react";

const CommonBtn = ({ btnText, url, icon: Icon, className }) => {
  return (
    <Link href={url}>
      <button
        className={`primary__button flex items-center gap-2 cursor-pointer bg-[#ffffff] py-2 px-8 rounded-full text-sm font-medium border border-black/5 hover:bg-[#111] hover:text-white ease-in-out duration-500  text-black ${className}`}
      >
        {btnText}
        {Icon && <Icon size={18} />}
      </button>
    </Link>
  );
};

export default CommonBtn;
