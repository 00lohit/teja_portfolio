export default function PageWrapper({ children, bg }) {
  return (
    <div
      style={{ backgroundColor: bg }}
      className="snap-center w-screen h-screen  items-center  flex flex-col justify-between pt-[8vh]"
    >
      {children}
    </div>
  );
}
