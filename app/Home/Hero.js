import PageWrapper from "../PageWrapper";

export default function Hero({ setCursorVariant, CursorVariant }) {
  return (
    <PageWrapper
      setCursorVariant={setCursorVariant}
      CursorVariant={CursorVariant}
      bg={"#CDF0DD"}
      className="h-[300vh]"
    ></PageWrapper>
  );
}
