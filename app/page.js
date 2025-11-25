import Banner from "./_components/Banner/Banner";
import HowWorks from "./_components/HowWorks/HowWorks";
import IntercomSim from "./_components/IntercomSim/IntercomSim";
import Navbar from "./_components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="relative">
      {/* FIXED HERO */}
      <section className="fixed top-0 left-0 w-full -z-10">
        <Navbar />
        <Banner />
      </section>

      {/* Spacer to avoid content being hidden behind fixed hero */}
      <div className="h-screen  "></div>
      {/* Optional extra sections */}
      <div className=" bg-black/10  backdrop-blur-2xl z-50">
        <section className="relative z-50 ">
          <IntercomSim />
        </section>
        {/* NEXT SECTION (scrolls over the hero) */}
        <section className=" relative ">
          <HowWorks />
        </section>
      </div>
    </div>
  );
}
