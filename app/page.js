"use client";

import PageWrapper from "./PageWrapper";
import Work from "./Home/Work";

import useMouse from "@react-hook/mouse-position";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

import website from "../public/work/website.svg";
import agent from "../public/work/agent.svg";
import digi from "../public/work/digi.svg";
import kisaan from "../public/work/kisaan.svg";
import mirchi from "../public/work/mirchi.svg";
import partner from "../public/work/partner.svg";
import seller from "../public/work/seller.svg";
import Hero from "./Home/Hero";
import Experience from "./Home/Experience";
import Footer from "./Home/Footer";

export default function Home() {
  const ref = useRef(null);

  const [cursorVariant, setCursorVariantfn] = useState("default");

  const setCursorVariant = (e) => {
    e ? setCursorVariantfn(e) : setCursorVariantfn("default");
  };

  let [variants, spring] = useCursorComponent(ref);
  return (
    <div className="w-screen h-screen" ref={ref}>
      <motion.div
        variants={variants}
        className="fixed z-30 flex items-center justify-center top-0 left-0 bg-black h-3 w-3 rounded-full pointer-events-none text-center"
        animate={cursorVariant}
        transition={spring}
      ></motion.div>
      <div className="scrollbar-none w-screen h-screen   overflow-auto overflow-x-hidden snap-y">
        <Hero setCursorVariant={setCursorVariant} CursorVariant={""} />
        <Experience setCursorVariant={setCursorVariant} CursorVariant={""} />

        {/* <PageWrapper
          setCursorVariant={setCursorVariant}
          CursorVariant={""}
          bg={"#FFC700"}
        ></PageWrapper> */}
        <Work setCursorVariant={setCursorVariant} />
        <Footer setCursorVariant={setCursorVariant} CursorVariant={""} />
      </div>
    </div>
  );
}

const useCursorComponent = (ref) => {
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition = 0;
  let mouseYPosition = 0;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY;
  }

  const cursorImage = (img) => ({
    opacity: 1,
    backgroundImage: `url(${img.src})`,
    height: img.height,
    width: img.width,
    backgroundSize: "cover",
    backgroundPosition: "center",
    x: mouseXPosition,
    y: mouseYPosition,
    backgroundColor: "transparent",
    borderRadius: 0,
  });

  let defaultStyle = {
    opacity: 1,
    height: 10,
    width: 10,
    backgroundColor: "black",
    x: mouseXPosition,
    y: mouseYPosition,
    transition: {
      type: "spring",
      mass: 0.6,
    },
  };

  const variants = {
    default: defaultStyle,

    partner: cursorImage(partner),

    website: cursorImage(website),

    kisaan: cursorImage(kisaan),

    seller: cursorImage(seller),

    agent: cursorImage(agent),

    digi: cursorImage(digi),

    mirchi: cursorImage(mirchi),
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  return [variants, spring];
};
