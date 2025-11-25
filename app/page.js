import Banner from "./_components/Banner/Banner";
import HowWorks from "./_components/HowWorks/HowWorks";
import IntercomSim from "./_components/IntercomSim/IntercomSim";
import Navbar from "./_components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="relative">
      {/* FIXED HERO (Navbar + Banner) */}
      <div className="fixed inset-0 h-screen w-full z-0">
        <Navbar />
        <Banner />
      </div>

      {/* SCROLL CONTENT - Overlaps the fixed hero */}
      <div className="relative z-10 mt-[100vh]">
        <section className="bg-black/10 backdrop-blur-2xl">
          <IntercomSim />
        </section>

        <section className="bg-black/10 backdrop-blur-2xl">
          <HowWorks />
        </section>
      </div>
    </div>
  );
}
