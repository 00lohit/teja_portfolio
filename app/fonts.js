import localFont from "next/font/local";

const fonts = localFont({
  src: [
    {
      path: "../public/fonts/Haskoy-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Haskoy-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Haskoy-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/impact.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-teja",
});

export default fonts;
