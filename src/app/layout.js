import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Lato } from "next/font/google";
import Header from "./components/NavBar/Header";
import Footer from "./components/Footer/Footer";
import StructuredData from "./components/StructuredData";

const lato = Lato({ subsets: ["latin-ext"], weight: ["300", "700"] });

export const metadata = {
  title: "Broughton Park Hideaway — Kosher Accommodation in Manchester",
  description:
    "Cosy duplex hideaway in the heart of the Jewish community in Broughton Park, Salford, Manchester. Ideal for visiting family, Chosson & Kallah, or a peaceful retreat. Book now.",
  keywords:
    "Broughton Park, kosher accommodation, Manchester, Salford, Jewish community, holiday let, hideaway, short stay",
  openGraph: {
    title: "Broughton Park Hideaway — Kosher Accommodation in Manchester",
    description:
      "Cosy duplex hideaway in the heart of the Jewish community in Broughton Park, Salford. 2 beds, modern bathroom, fully equipped. Book your stay today.",
    url: "https://broughton-park-hideaway.onrender.com",
    siteName: "Broughton Park Hideaway",
    images: [
      {
        url: "/gallery-image-1.jpg",
        width: 640,
        height: 480,
        alt: "Bedroom at Broughton Park Hideaway, Salford, Manchester",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <StructuredData />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
