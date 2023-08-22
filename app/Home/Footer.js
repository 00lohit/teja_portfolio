import PageWrapper from "../PageWrapper";
import { motion } from "framer-motion";
import Image from "next/image";
import Star from "../../public/star.svg";
import TNfooter from "../../public/TNfooter.svg";

export default function Footer({ setCursorVariant, CursorVariant }) {
  return (
    <PageWrapper
      setCursorVariant={setCursorVariant}
      CursorVariant={CursorVariant}
      bg={"#252525"}
      className="h-[300vh]"
    >
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <div className="relative flex justify-center items-center mr-9  mb-24">
            <Image
              className="absolute z-50"
              priority
              src={TNfooter}
              alt="footer"
            />

            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ ease: "linear", duration: 20, repeat: Infinity }}
              style={{
                display: "inline-block",
                transformOrigin: "center",
              }}
            >
              <Image priority src={Star} alt="footer" />
            </motion.div>
          </div>

          <div>
            <div className="flex flex-col justify-center items-center">
              <h2
                style={{ color: "#FFF9DC" }}
                className="font-extrabold text-5xl md:text-9xl text-center z-30 cursor-default"
              >
                LET’S CONNECT
              </h2>
              <div className="mt-6">
                <a href="mailto:tejanune00722@gmail.com">
                  <p
                    style={{ color: "#FFF9DC" }}
                    className="text-5xl font-semibold  cursor-default underline"
                  >
                    tejanune00722@gmail.com
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-xl font-normal  cursor-default text-white mb-6">
        {"ALL CONTENT © TEJA NUNE 2023"}
      </p>
    </PageWrapper>
  );
}
