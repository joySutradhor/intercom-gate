import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { MdOutlineArrowOutward } from "react-icons/md";

const SimsCards = () => {
  return (
    <div>
      <div >
        <div className="flex justify-between pb-10 ">
          <div>
            <h2 className="subTitle mb-2">30-Day Rolling Contract </h2>
            <p className="para">
              All SIMs operate on a 30-day rolling contract, giving you
              flexibility with no long-term commitment.
            </p>
          </div>

         
        </div>

        <div className="ic__i__card__container">
          <div className="ic__i__cards__parent   ">
            <div
              className="relative   group  ic__card__parent "
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%)",
                borderRadius: "16px",
              }}
            >
              <h5 className="ic__i__card__sm__title">
                30-day rolling contract
              </h5>
              <div>
                <h3 className="ic__i__card__title">Domestic SIM</h3>
                <p className="mb-4">
                  Designed for single residential properties (one household).
                </p>
                <h4>
                  Price: <span className="ic__i__card__price">£5.00</span> per
                  month
                </h4>
              </div>

              <div className="mt-8">
                <button className="btn__sytle">
                  Sign Up
                  <BsArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* second card */}
            <div
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%)",
                borderRadius: "16px",
              }}
              className="ic__card__parent group    relative"
            >
              <h5 className="ic__i__card__sm__title">
                30-day rolling contract
              </h5>
              <div>
                <h3 className="ic__i__card__title">Commercial SIM</h3>
                <p className="mb-4 ">
                  Ideal for flats, apartment blocks, offices
                </p>
                <h4 className="">
                  Price: <span className="ic__i__card__price">£15.00</span> per
                  month
                </h4>
              </div>

              <div className="mt-8">
                <button className="btn__sytle">
                  Sign Up
                  <span>
                    {" "}
                    <MdOutlineArrowOutward />{" "}
                  </span>
                </button>
              </div>
            </div>

            <div
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%)",
                borderRadius: "16px",
              }}
              className=" relative"
            >
              <div className="relative   group  ic__card__parent group">
                <div>
                  <button className="absolute right-0 top-0 text-shadow-2xs font-medium text-sm rounded-2xl rounded-tr-2xl bg-[#111] text-white py-1.5 px-6 italic">
                    {" "}
                    Billed annually
                  </button>
                </div>
                <h5 className="ic__i__card__sm__title text-black">
                  30-day rolling contract
                </h5>
                <div>
                  <h3 className="ic__i__card__title">Gate SIM</h3>
                  <p className="mb-1 para">
                    Ideal for dial to open devices, no more top ups.
                  </p>
                  <p className="mb-4 font-medium italic text-black">
                    Billed annually
                  </p>
                  <h4 className="text-black">
                    Price: <span className="ic__i__card__price ">£1.75</span>{" "}
                    per month
                  </h4>
                </div>

                <div className="mt-8">
                  <button className="btn__sytle">
                    Sign Up
                    <span>
                      {" "}
                      <MdOutlineArrowOutward />{" "}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimsCards;
