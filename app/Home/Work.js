import PageWrapper from "../PageWrapper";

import Image from "next/image";
import isDark from "@/components/checkColor";

import Dark from "@/public/arrow/dark.svg";
import Light from "@/public/arrow/light.svg";

const Work = () => {
  const Data = [
    {
      color: "#FDFBFF",
      title: "FARMOR WEBSITE",
      titleColor: "#7112BC",
      link: "",
      cursor: "",
    },
    {
      color: "#7143DA",
      title: "FARMOR PARTNER",
      titleColor: "#FCF7E6",
      link: "",
      cursor: "",
    },
    {
      color: "#30A74B",
      title: "FARMOR KISAAN",
      titleColor: "#DFFF61",
      link: "",
      cursor: "",
    },
    {
      color: "#EB7826",
      title: "FARMOR SELLER CENTRAL",
      titleColor: "#FFF9DC",
      link: "",
      cursor: "",
    },
    {
      color: "#009BF1",
      title: "FARMOR AGENT",
      titleColor: "#BCFFF3",
      link: "",
      cursor: "",
    },
    {
      color: "#5F85FF",
      title: "DIGI SPORTS",
      titleColor: "#FFFFFF",
      link: "",
      cursor: "",
    },
    {
      color: "#FF4E4E",
      title: "MIRCHI.COM",
      titleColor: "#FEFFBF",
      link: "",
      cursor: "",
    },
  ];

  return Data.map((e, i) => <Individual {...e} key={i} />);
};

const Individual = ({ color, title, titleColor, link, cursor }) => {
  return (
    <PageWrapper bg={color}>
      <div className="flex-1 items-center  flex flex-col justify-between p-6">
        <p style={{ color: titleColor }} className="font-extrabold text-4xl">
          WORK:
        </p>
        <h2 style={{ color: titleColor }} className="font-extrabold text-9xl">
          {title}
        </h2>

        <div
          style={{ backgroundColor: titleColor }}
          className="border-[1px] border-black flex px-5 rounded-full py-2"
        >
          <p
            style={{ color: isDark(titleColor) ? "#fff" : "#000" }}
            className="font-semibold text-xl mr-2"
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
