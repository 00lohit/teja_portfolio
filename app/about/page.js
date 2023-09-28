import Image from "next/image";
import Arrow1 from "@/public/about/1.svg";
import Arrow2 from "@/public/about/2.svg";
import Arrow3 from "@/public/about/3.svg";
import Arrow4 from "@/public/about/4.svg";
import Arrow5 from "@/public/about/5.svg";
import WorkArrow from "@/public/arrow/arrowbig.svg";

export default function page() {
  return (
    <div className="w-screen h-screen bg-[#FDF4F5] px-[2vw] pt-[8vh]">
      <Profiles />
    </div>
  );
}

let data = [
  {
    title: "LINKEDIN",
    link: "https://github.com/00lohit/teja_portfolio",
    className:
      "font-extrabold text-5xl z-30 cursor-default mr-3 group-hover:text-[#0961B8]",
    image: Arrow1,
  },
  {
    title: "TWITTER",
    link: "https://github.com/00lohit/teja_portfolio",
    className:
      "font-extrabold text-5xl z-30 cursor-default mr-3 group-hover:text-[#1C99E6]",
    image: Arrow2,
  },
  {
    title: "INSTAGRAM",
    link: "https://github.com/00lohit/teja_portfolio",
    className:
      "font-extrabold text-5xl z-30 cursor-default mr-3 group-hover:text-[#6A38BF]",
    image: Arrow3,
  },
  {
    title: "BEHANCE",
    link: "https://github.com/00lohit/teja_portfolio",
    className:
      "font-extrabold text-5xl z-30 cursor-default mr-3 group-hover:text-[#0053F2]",
    image: Arrow4,
  },
  {
    title: "DRIBBLE",
    link: "https://github.com/00lohit/teja_portfolio",
    className:
      "font-extrabold text-5xl z-30 cursor-default mr-3 group-hover:text-[#DE4882]",
    image: Arrow5,
  },
];

const Profiles = () => {
  return (
    <div className=" w-full p-9 px-16 bg-[#FDD3D8] rounded-2xl flex justify-between">
      {data.map(({ title, className, link, image }, i) => (
        <a key={i.toString()} href={link}>
          <div className="flex group items-center justify-center">
            <p className={className}>{title}</p>
            <div className="w-10 h-10 flex justify-center items-center">
              <Image
                className="
              absolute
              transition-transform transform duration-300 ease-in-out rotate-0 group-hover:rotate-180
              opacity-100
              group-hover:opacity-0"
                priority
                src={WorkArrow}
                alt="Link"
              />
              <Image
                className="
              absolute
              transition-transform transform duration-300 ease-in-out -rotate-180 group-hover:rotate-0
              opacity-0
              group-hover:opacity-100"
                priority
                src={image}
                alt="Link"
              />
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};
