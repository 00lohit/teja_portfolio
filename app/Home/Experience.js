import PageWrapper from "../PageWrapper";
import Image from "next/image";
import Work from "../../public/work.svg";
import { motion } from "framer-motion";
import WorkArrow from "../../public/workArrow.svg";

export default function Experience({ setCursorVariant, CursorVariant }) {
  return (
    <PageWrapper
      setCursorVariant={setCursorVariant}
      CursorVariant={CursorVariant}
      bg={"#CDF0DD"}
      className="h-[300vh]"
    >
      <div className="flex-1, w-full px-16">
        <p
          style={{ color: "#33A468" }}
          className="font-extrabold text-6xl z-30 cursor-default my-10"
        >
          WORK EXPERIENCE
        </p>
        {[
          {
            title: "HYPOSOFT GLOBAL SOLUTIONS",
            link: "",
            date: " 2022 FEBRUARY - PRESENT (FULL TIME)",
          },
          {
            title: "FARMOR AGRI SOLUTIONS",
            link: "",
            date: "4 MONTHS | 2021 OCTOBER - 2022 JANUARY (INTERNSHIP)",
          },
          {
            title: "CHAINLINK TECHNOLOGY PVT. LTD",
            link: "",
            date: "FREELANCE",
          },
        ].map(({ title, link, date }) => (
          <div className="w-full border-b-2 border-black py-6 flex justify-between items-center hover:scale-[1.01] transition duration-300 transform hover:-translateZ-0.5">
            <p className="font-semibold text-3xl mr-2 cursor-default text-black ">
              {title}
            </p>
            <div className="flex items-center justify-center">
              <p className="font-semibold text-xl mr-2 cursor-default text-black ">
                {date}
              </p>
              <Image priority src={WorkArrow} alt="Link" />
            </div>
          </div>
        ))}
      </div>

      <div>
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          style={{ display: "flex", alignItems: "center", scale: 1.7 }}
          className="w-full mt-48 mb-20"
        >
          <Image priority src={Work} alt="Work" />
          <Image priority src={Work} alt="Work" />
        </motion.div>
      </div>
    </PageWrapper>
  );
}
