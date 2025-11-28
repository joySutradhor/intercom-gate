import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const WorksModalContent = () => {
  return (
    <div>
      <div>
        {/* Title */}
        <h2 className=" subTitle mb-3  border-b border-black/10 pb-3">
          How It Works
        </h2>

        {/* Description */}
        <div className="space-y-2 para">
          <p>
            Once your SIM is installed, we allow a 3-month usage period. Charged
            at the rate stated.This gives us enough data to calculate your
            average consumption and ensure you are on the most suitable package.
          </p>
          <p>
            If any changes are required, you will always be informed in advance.
          </p>
        </div>

       
      </div>
    </div>
  );
};

export default WorksModalContent;
