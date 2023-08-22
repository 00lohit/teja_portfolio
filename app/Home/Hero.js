import PageWrapper from "../PageWrapper";
import Skills from "../../public/skills.svg";
import Name from "../../public/name.svg";
import Globe from "../../public/globe.svg";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero({ setCursorVariant, CursorVariant }) {
  return (
    <PageWrapper
      setCursorVariant={setCursorVariant}
      CursorVariant={CursorVariant}
      bg={"#FFC700"}
      className="h-[300vh]"
    >
      <div className="flex-1 flex justify-center items-center flex-col">
        <div className="flex justify-center items-center relative">
          <div className="relative md:absolute mr-7">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ ease: "linear", duration: 20, repeat: Infinity }}
              style={{
                display: "inline-block",
                transformOrigin: "center",
              }}
            >
              <Image priority src={Globe} alt="Skills" />
            </motion.div>
          </div>
          <Image priority src={Name} alt="Skills" />
        </div>
        <div>
          <motion.div
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
            style={{ display: "flex", alignItems: "center", scale: 1.7 }}
            className="w-full my-48"
          >
            <Image priority src={Skills} alt="Skills" />
            <Image priority src={Skills} alt="Skills" />
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
}
