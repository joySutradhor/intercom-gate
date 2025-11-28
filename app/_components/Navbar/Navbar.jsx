

import logo from "@/public/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      {/* Main Navbar */}
      <nav>
        <div className=" max__width">
          <Image
            src={logo}
            alt="intercom sim logo"
            className="w-[8vw] h-full "
            height={1000}
            width={1000}
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
