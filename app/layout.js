import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "GSM Intercom SIM Cards | Reliable & Low-Cost UK SIMs",
    template: "%s | Intercom SIM Cards UK",
  },

  description:
    "Low-cost GSM SIM cards for gate intercoms & door entry systems. Easy activation, UK delivery & support. Reliable connectivity for access control.",

  keywords: [
    "GSM intercom SIM cards",
    "gate intercom SIM",
    "door entry SIM card",
    "intercom SIM UK",
    "GSM gate SIM",
    "access control SIM card",
    "intercom SIM for gates",
    "low cost intercom SIM",
    "GSM door entry SIM",
    "UK intercom SIM provider",
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
    canonical: "https://intercomsimcards.co.uk",
  },

  openGraph: {
    title: "GSM Intercom SIM Cards | Simple, Reliable & Low-Cost",
    description:
      "Keep your gate intercom or door entry system connected with our GSM Intercom SIM Cards. Designed for access control units with easy activation, flexible SIM management, and UK-based support.",
    url: "https://intercomsimcards.co.uk",
    siteName: "Intercom SIM Cards",
    images: [
      {
        url: "https://intercomsimcards.co.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GSM Intercom SIM Cards for Gate & Door Entry Systems",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "GSM Intercom SIM Cards | UK Gate Intercom SIMs",
    description:
      "Affordable and reliable GSM SIM cards for gate intercoms, door entry systems, and GSM access units. Online activation, safe UK delivery, and expert support.",
    images: ["https://intercomsimcards.co.uk/og-image.jpg"],
  },

  category: "Telecommunications",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-arp="">
      <body
        cz-shortcut-listen="true"
        data-new-gr-c-s-check-loaded="14.1265.0"
        data-gr-ext-installed=""
        className={` ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       
        {children}
        
      </body>
    </html>
  );
}
