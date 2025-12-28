import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";
import logo from "@/public/logo.png";
import Footer from "../Footer/Footer";
import Link from "next/link";

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
