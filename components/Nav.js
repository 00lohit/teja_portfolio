"use client";

import TN from "@/public/TN.svg";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Nav = () => {
  const pathname = usePathname();
  return (
    <div className="w-screen h-[8vh] border-b-2 border-black px-[2vw] flex items-center justify-between absolute top-0">
      <Image className="h-[6.4vh] w-[6.4vh]" alt={""} src={TN}></Image>
      <div className="flex">
        <Link target="_blank" href={"./Teja_Resume.pdf"} className="pr-2 mx-1">
          <h3 className="font-bold">RESUME</h3>
        </Link>

        {pathname == "/" ? (
          <Link href={"/about"} className="pl-2 mx-1">
            <h3 className="font-bold">ABOUT</h3>
          </Link>
        ) : (
          <Link href={"/"} className="pl-2 mx-1">
            <h3 className="font-bold">HOME</h3>
          </Link>
        )}
      </div>
    </div>
  );
};
