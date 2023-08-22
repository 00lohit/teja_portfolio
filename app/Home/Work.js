import PageWrapper from "../PageWrapper";

import Image from "next/image";
import isDark from "@/components/checkColor";

import Dark from "@/public/arrow/dark.svg";
import Light from "@/public/arrow/light.svg";

const Work = ({ setCursorVariant }) => {
  const Data = [
    {
      color: "#FDFBFF",
      title: "FARMOR WEBSITE",
      titleColor: "#7112BC",
      link: "",
      cursor: "website",
    },
    {
      color: "#7143DA",
      title: "FARMOR PARTNER",
      titleColor: "#FCF7E6",
      link: "",
      cursor: "partner",
    },
    {
      color: "#30A74B",
      title: "FARMOR KISAAN",
      titleColor: "#DFFF61",
      link: "",
      cursor: "kisaan",
    },
    {
      color: "#EB7826",
      title: "FARMOR SELLER CENTRAL",
      titleColor: "#FFF9DC",
      link: "",
      cursor: "seller",
    },
    {
      color: "#009BF1",
      title: "FARMOR AGENT",
      titleColor: "#BCFFF3",
      link: "",
      cursor: "agent",
    },
    {
      color: "#5F85FF",
      title: "DIGI SPORTS",
      titleColor: "#FFFFFF",
      link: "",
      cursor: "digi",
    },
    {
      color: "#FF4E4E",
      title: "MIRCHI.COM",
      titleColor: "#FEFFBF",
      link: "",
      cursor: "mirchi",
    },
  ];

  return Data.map((e, i) => (
    <Individual {...e} setCursorVariant={setCursorVariant} key={i} />
  ));
};

const Individual = ({
  color,
  title,
  titleColor,
  link,
  cursor,
  setCursorVariant,
}) => {
  return (
    <PageWrapper
      setCursorVariant={setCursorVariant}
      CursorVariant={cursor}
      bg={color}
    >
      <div className="flex-1 items-center  flex flex-col justify-between p-6">
        <p
          style={{ color: titleColor }}
          className="font-extrabold text-4xl z-30 cursor-default"
        >
          WORK:
        </p>
        <h2
          style={{ color: titleColor }}
          className="font-extrabold text-5xl md:text-9xl text-center z-30 cursor-default"
        >
          {title}
        </h2>

        <div
          style={{ backgroundColor: titleColor }}
          className="border-[1px] border-black flex px-5 rounded-full py-2 z-30  hover:scale-125 transition duration-300 transform hover:-translateZ-0.5"
        >
          <p
            style={{ color: isDark(titleColor) ? "#fff" : "#000" }}
            className="font-semibold text-xl mr-2 cursor-default"
          >
            VIEW PROJECT
          </p>
          <Image alt={""} src={isDark(titleColor) ? Light : Dark}></Image>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Work;
