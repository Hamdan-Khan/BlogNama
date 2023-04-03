import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "BlogNama | Ultimate blogging experience",
  description:
    "Discover the vibrant world of desi lifestyle and culture with Blognama. Stay updated on the latest news, trends, and opinions in the world of desi entertainment, fashion, food, and more.",
  author: "Hamdan Khan",
  keywords:
    "Desi lifestyle,  Desi culture,  Desi entertainment,  Desi fashion,  Desi food,  South Asian cuisine,  Urdu literature,  Hindi movies,  Pakistani music,  Indian art",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
