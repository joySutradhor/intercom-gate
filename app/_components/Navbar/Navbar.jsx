import logo from "@/public/logo-intercom.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-[5vw] py-10">
      <div className="">
        <Link href="/">
          <Image
            src={logo}
            alt="intercom sim logo"
            className="w-[5vw] h-full "
            height={1000}
            width={1000}
          />
        </Link>
      </div>

      <div>
        <ul className="flex gap-x-10 text-lg font-medium bg-white backdrop-blur-md py-2 px-10 cursor-pointer rounded-full">
          <Link href="/">
          <li>Home</li>
          </Link>
          {/* <li>About Us</li> */}
          <Link href="/intercom-sim-cards">
            <li>SIM Cards</li>
          </Link>
          <Link href="/active-cancel-sims">
            <li>Activate/Cancel Sims </li>
          </Link>
          {/* <Link href="/blogs">
            <li>Blogs</li>
            </Link> */}
            <Link href="/contact">
              <li>Contact </li>
            </Link>
          
        </ul>
      </div>

      <div className="cursor-pointer">
        <Link href="/support">
          <button className="btn__sytle cursor-pointer ">
            Customer Support
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
