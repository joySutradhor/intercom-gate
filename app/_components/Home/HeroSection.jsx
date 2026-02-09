

import SimCards from "./SimCards";

const HeroSection = () => {
  

  return (
    <section>
      <div className="relative w-full xl:h-screen overflow-hidden">
        {/* Background Video */}
        <video
          src="/intercom-video-banner.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-10"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-20" />

        {/* Content */}
        <div className="relative z-40 h-full flex items-center justify-center px-[5%] pt-[30vh] 2xl:pt-[25vh]">
          <div className=" ">
            <div className="">
              <h1 className="ic__main__title text-center">
                GSM Intercom SIM Cards
              </h1>

              <div className="max-w-xl mx-auto text-center">
                <p className="ic__para mt-5 mb-4">
                  Welcome to Intercom SIM Cards — the simple and affordable way
                  to keep your intercom or gate entry system connected.
                </p>

                <p className="ic__para mb-6">
                  Reliable UK SIM solutions for gate intercoms, door entry
                  systems, and GSM access units.
                </p>

             
             
              </div>
            </div>
            <div className="pb-20 xl:pb-20">
              <SimCards/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
