export default function PageWrapper({
  children,
  bg,
  setCursorVariant,
  CursorVariant,
  className = "",
}) {
  return (
    <div
      onMouseEnter={() => setCursorVariant(CursorVariant)}
      onMouseLeave={() => setCursorVariant("default")}
      style={{ backgroundColor: bg }}
      className={
        "snap-center w-screen h-screen  items-center  flex flex-col justify-between pt-[8vh] " +
        className
      }
    >
      {children}
    </div>
  );
}
