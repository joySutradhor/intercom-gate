"use client"

const CTA = () => {
  return (
    <section className="bg-gray-100 section__top text-center  rounded-lg max__width py-16 px-6 flex justify-center items-center ">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Upgrade Your Property with GSM Intercom 
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Get a professional installation of GSM intercom systems, SIM-enabled
          intercoms, and automated gate solutions. Secure, reliable, and perfect
          for homes and businesses.
        </p>
        {/* <div className="flex flex-col md:flex-row justify-center gap-4">
          <a href="/contact" className="btn__sytle">
            Request a Free Quote
          </a>

          <button
            type="button"
            className="btn__sytle !bg-black !text-white"
            onClick={() => (window.location.href = "tel:+4478894648129")}
          >
            Call Us Now
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default CTA;
