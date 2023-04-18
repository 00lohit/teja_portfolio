import Image from "next/image";
import { Inter } from "next/font/google";
import PageWrapper from "./PageWrapper";
import Work from "./Home/Work";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="scrollbar-none w-screen h-screen  overflow-auto snap-y">
      <PageWrapper bg={"#FFC700"}></PageWrapper>
      <PageWrapper bg={"#CDF0DD"}></PageWrapper>
      <Work />
    </div>
  );
}
