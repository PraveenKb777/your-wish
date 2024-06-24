import Error404 from "@/components/404Error";
import Courses from "./courses/page";
import ".././app/globals.css";

export const runtime = "edge";

export default function NotFound() {
  return (
    <>
      <Error404 />
      <div className="horizontal-line"></div>
      <div style={{paddingTop:'80px', paddingBottom:'80px'}}>
        <Courses />
        <div className="horizontal-line"></div>
      </div>
    </>
  );
}
