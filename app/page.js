import Banner from "./_components/Banner/Banner";
import HowWorks from "./_components/HowWorks/HowWorks";
import Navbar from "./_components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      {/* SMOOTH WRAPPER */}
      <section className="relative h-screen">
        {/* FIXED HERO */}
        <div className="fixed inset-0 z-10">
          <Navbar />
          <Banner />
        </div>
      </section>

      {/* NEXT SECTION (scrolls smoothly over the hero) */}
      <section className="relative z-20 bg-black/10 backdrop-blur-sm">
        <div className="py-20">
          <HowWorks />
        </div>
      </section>
    </div>
  );
}
