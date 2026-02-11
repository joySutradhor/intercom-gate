import ActiveCancelSim from "../_components/ActiveCancelSim/ActiveCancelSim";

export const metadata = {
  title: "Activate & Cancel SIMs | Easy Intercom SIM Management",

  description:
    "Manage your intercom SIM cards online. Quick activation, flexible cancellation, no contracts. Full control of your gate & door entry system connectivity.",

  keywords: [
    "activate intercom SIM",
    "cancel intercom SIM",
    "SIM card activation",
    "SIM management portal",
    "intercom SIM control",
    "activate gate SIM",
    "cancel door entry SIM",
    "flexible SIM plans",
    "no contract SIM",
    "manage intercom connectivity",
    "SIM card cancellation",
    "online SIM activation",
  ],

  authors: [{ name: "Intercom SIM Cards" }],
  creator: "Intercom SIM Cards",
  publisher: "Intercom SIM Cards",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://intercomsimcards.co.uk/active-cancel-sims",
  },

  openGraph: {
    title: "Activate & Cancel Your Intercom SIMs | Flexible Management",
    description:
      "Take full control of your intercom SIM cards with our easy online management system. Activate new SIMs instantly, cancel anytime with no penalties. No long-term contracts, just flexible connectivity for your access control systems.",
    url: "https://intercomsimcards.co.uk/active-cancel-sims",
    siteName: "Intercom SIM Cards",
    images: [
      {
        url: "https://intercomsimcards.co.uk/og-image-sim-management.jpg",
        width: 1200,
        height: 630,
        alt: "Activate and Cancel Intercom SIM Cards Online",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Activate & Cancel Intercom SIMs | No Contracts",
    description:
      "Manage your intercom SIM cards online. Quick activation, flexible cancellation, no contracts. Full control of your gate & door entry connectivity.",
    images: ["https://intercomsimcards.co.uk/og-image-sim-management.jpg"],
  },

  category: "Telecommunications",
};

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
