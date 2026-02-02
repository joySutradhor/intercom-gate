import SubmitForm from "../_components/SubmitForm/SubmitForm";

const Page = () => {
  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden">
        <video
          src="/intercom-video-banner.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        {/* CONTENT */}
        <div className="relative z-50">
          <SubmitForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
