import PageWrapper from "../PageWrapper";

const Work = () => {
  const Data = [
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
      <div className="flex-1 items-center  flex flex-col justify-between">
        <p style={{ color: titleColor }} className="font-extrabold text-4xl">
          WORK:
        </p>
        <h2 style={{ color: titleColor }} className="font-extrabold text-9xl">
          {title}
        </h2>
      </div>
    </PageWrapper>
  );
};

export default Work;
