import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";
import logo from "@/public/logo.png";
import Footer from "../Footer/Footer";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

const Banner = () => {
  return (
    <div className="max__width ">
      <div className="h-screen">
        <div>
          <nav className="">
            <div className="absolute top-0 left-0 w-full z-50 px-[5%] ">
              <Image
                src={logo}
                alt="intercom sim logo"
                className="ic__logo "
                height={1000}
                width={1000}
              />
            </div>
          </nav>
        </div>

        {/* content parent */}
        <div className="ic__h__parent    ">
          <div className=" ic__h__child__parent ">
            <h2 className="title ">GSM Intercom SIM Cards</h2>
            <div className="ic__h__para__wrapper para">
              <p>
                Welcome to Intercom SIM Cards , the easy and affordable way to
                keep your intercom or gate entry system connected.
              </p>
              <p>
                Intercom SIM Cards Simple, Reliable & Low-Cost Perfect for Gate
                Intercoms, Door Entry Systems & GSM Access Units
              </p>
            </div>

            {/* btn group parent */}
            <div className="ic__h__btns__parent ">
              <Link href="/how-works">
                <button className="btn__sytle">
                  How Its Works{" "}
                  <span>
                    {" "}
                    <MdOutlineArrowOutward />{" "}
                  </span>
                </button>
              </Link>

              <Link href="/all-sims-cards">
                <button className="btn__sytle">
                  Sim Cards
                  <span>
                    {" "}
                    <MdOutlineArrowOutward />{" "}
                  </span>
                </button>
              </Link>

              <Link href="/active-cancel-sims">
                <button className="btn__sytle">
                  Active / Cancel Sim
                  <span>
                    {" "}
                    <MdOutlineArrowOutward />{" "}
                  </span>
                </button>
              </Link>
              <Link href="/support">
                <button className="btn__sytle">
                  Customer Support
                  <span>
                    {" "}
                    <MdOutlineArrowOutward />{" "}
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="ic__h__child__parent space-y-5">
            <div>
              <Link href="/all-sims-cards">
                <button className="flex items-center gap-2 cursor-pointer bg-[#111] text-white hover:bg-white  py-2 px-8 rounded-full text-sm font-medium border border-black/5  shadow ease-in-out duration-500  text-shadow-2xs hover:text-black ">
                  Check packages & prices
                  <BsArrowUpRight className="w-4 h-4" />
                </button>
              </Link>
            </div>

            <div>
              <Link href="/sim-submit-form">
                <button className="btn__sytle">
                  Order a SIM
                  <BsArrowUpRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
            
            <div>
              <ul className="text-base font-medium space-y-2 list-disc list-inside">
                <li>Designed for gate intercoms / door entry</li>
                <li>Activate online (safe delivery)</li>
                <li>UK support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Banner;
