import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import "@/styles/animations.css";
import Navbar from "../components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blissventures/landing"),

  title:
    "Bliss One Apartments Ghatkesar – Premium 2 & 3 BHK | Bliss Ventures Private Limited",

  description:
    "Bliss One Apartments – Premium 2 & 3 BHK homes in Ghatkesar, Hyderabad. 3.6 acre gated community, 22,000 sqft clubhouse, 10 mins to ORR Exit-9. RERA No: P02200007437. Book a free site visit today!",

  keywords: [
    "Bliss One Apartments",
    "Apartments in Ghatkesar",
    "2 BHK Flats in Ghatkesar",
    "3 BHK Flats in Ghatkesar",
    "Bliss Ventures",
    "Apartments in Hyderabad",
    "HMDA Approved Apartments",
    "RERA Approved Apartments",
    "Ghatkesar Real Estate",
    "Flats Near ORR Exit 9",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Bliss One Apartments Ghatkesar – Premium 2 & 3 BHK | Bliss Ventures Private Limited",

    description:
      "Premium 2 & 3 BHK homes in Ghatkesar, Hyderabad. 3.6 acre gated community with 22,000 sqft clubhouse and excellent connectivity.",

    url: "https://blissventures.in/landing",
    siteName: "Bliss One Apartments",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "/images/bliss2.png",
        width: 1200,
        height: 630,
        alt: "Bliss One Apartments Ghatkesar",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Bliss One Apartments Ghatkesar – Premium 2 & 3 BHK",

    description:
      "Premium 2 & 3 BHK homes in Ghatkesar, Hyderabad. Book your free site visit today.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-white text-gray-900`}
      >
        {/* Google Ads Global Site Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18134460342"
          strategy="afterInteractive"
        />

        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18134460342');
          `}
        </Script>

        <Script id="google-ads-event-helper" strategy="afterInteractive">
          {`
           function gtagSendEvent(url) {
             var callback = function () {
               if (typeof url === 'string') {
                 window.location = url;
               }
             };
       
             gtag('event', 'ads_conversion_Contact_Us_1', {
               event_callback: callback,
               event_timeout: 2000,
             });
       
             return false;
           }
       
           window.gtagSendEvent = gtagSendEvent;
         `}
        </Script>

        <Script id="gtm" strategy="afterInteractive">
          {`
      (function(w,d,s,l,i){w[l]=w[l]||[];
      w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
      j.async=true;
      j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
      f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-TKW7C63Z');
    `}
        </Script>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TKW7C63Z"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18134460342"
          strategy="afterInteractive"
        />

        <Script id="google-ads" strategy="afterInteractive">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = gtag;

      gtag('js', new Date());
      gtag('config', 'AW-18134460342');
    `}
        </Script>

        <Script id="google-ads-helper" strategy="afterInteractive">
          {`
      function gtagSendEvent(url) {
        var callback = function () {
          if (typeof url === 'string') {
            window.location = url;
          }
        };

        gtag('event', 'ads_conversion_Contact_Us_1', {
          event_callback: callback,
          event_timeout: 2000,
        });

        return false;
      }

      window.gtagSendEvent = gtagSendEvent;
    `}
        </Script>

        {/* <Navbar /> */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}