import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Lato } from "next/font/google";
import Header from "./components/NavBar/Header";
import Footer from "./components/Footer/Footer";

const lato = Lato({ subsets: ["latin-ext"], weight: ["300", "700"] });

export const metadata = {
  title: "Holiday Home",
  description: "Rental Apartment RBS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
