import "./globals.css";

export const metadata = {
  title: "Teja Nune",
  description: "Teja Nune",
};

import fonts from "./fonts";
import { Nav } from "@/components/Nav";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/fav.svg" />
      </head>
      <body className={`${fonts.variable} font-sans`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
