import Error404 from "@/components/404Error";
import Courses from "./courses/page";
import ".././app/globals.css";

export const runtime = "edge";

export default function NotFound() {
  return (
    <>
      <Error404 />
      <div
        style={{
          background:
            "linear-gradient(270deg, rgba(255, 255, 255, 0.2) 19.767%, rgba(225, 225, 225, 0.5) 49.7917%, rgba(171, 171, 171, 0.2) 80.3431%)",
          opacity: 1,
          height: 1,
          width: "100vw",
          position: "absolute",
          left: 0,
          marginTop: "40px",
        }}
      ></div>
      <div style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <Courses />
      </div>
    </>
  );
}
