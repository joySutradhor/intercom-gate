import Banner from "./_components/Banner/Banner";
import Hero from "./_components/Hero/Hero";
import HowWorks from "./_components/HowWorks/HowWorks";
import IntercomSim from "./_components/IntercomSim/IntercomSim";
import Navbar from "./_components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="relative">
      <Hero />

      {/* <div className="fixed inset-0 h-screen w-full z-0">
        <Navbar />
        <Banner />
      </div>


      <div className="relative z-10 mt-[100vh]">
        <section className="bg-black/10 backdrop-blur-2xl">
          <IntercomSim />
        </section>

        <section className="bg-black/10 backdrop-blur-2xl">
          <HowWorks />
        </section>
      </div> */}
    </div>
  );
}
