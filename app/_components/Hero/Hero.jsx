import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* BACKGROUND VIDEO */}
      <video
        src="/intercom-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
      />
      <div className="absolute inset-0 bg-black/60"></div>
      {/* CONTENT */}
      <div className="relative z-50">
        <Banner />
      </div>
    </div>
  );
};

export default Hero;
