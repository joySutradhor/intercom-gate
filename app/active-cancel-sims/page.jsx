
import ActiveCancelSim from "../_components/ActiveCancelSim/ActiveCancelSim";

const Page = () => {
  return (
    <div>
      <div className="relative w-full  flex justify-center items-center">
        {/* <video
          src="/intercom-video-banner.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
        /> */}
        {/* <div className="absolute inset-0 bg-black/60"></div> */}
        {/* CONTENT */}
        <div className="my-[10vh]">
          <ActiveCancelSim />
        </div>
      </div>
    </div>
  );
};

export default Page;
