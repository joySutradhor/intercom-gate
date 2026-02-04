"use client";

import React, { useEffect, useState } from "react";


// Gallery images
const galleryImages = [
  { src: "/gate-photos/image/Commercial/CommercialSIM.webp", alt: "Commercial Intercom SIM" },
  { src: "/gate-photos/image/Commercial/CommercialSIM2.webp", alt: "Commercial Intercom SIM" },
  { src: "/gate-photos/image/Domestic/DomesticSim.webp", alt: "Domestic Intercom SIM" },
  { src: "/gate-photos/image/Domestic/DomesticSim1.webp", alt: "Domestic Intercom SIM" },
  { src: "/gate-photos/image/Gate/GateSim.webp", alt: "Gate Intercom SIM" },
  { src: "/gate-photos/image/Gate/GateSim1.webp", alt: "Gate Intercom SIM" },

];

const WorksGallery = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="max__width section__top">
      {/* Section Header */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="title">
          Showcasing Our Intercom & Gate Automation Projects
        </h2>
        <p className="para mt-4">
          Browse our Works Gallery to see professional installations of GSM
          intercom systems, SIM-enabled intercoms . Each
          project demonstrates our quality workmanship, reliable connectivity,
          and secure access solutions for homes and businesses.
        </p>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-3 gap-5">
        {galleryImages.map((img, index) => (
          <div key={index}  className="overflow-hidden rounded-lg">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-[40vh] object-cover transform hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorksGallery;
