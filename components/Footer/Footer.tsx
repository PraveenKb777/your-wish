import React from "react";
import Logo from "../Logo/Logo";
import "./index.css";
import StyledText from "../StyledText/StyledText";
import GradientText from "../GradientText/GradientText";

const Footer = () => {
  return (
    <div
      className=" w-full  text-white flex justify-center items-center"
      style={{ height: "calc(100dvh - 78px)" }}
    >
      <div className="w-[1100px] h-full flex flex-col justify-center  ">
        <div className="flex w-full   justify-between">
          <div className="w-[40%]">
            <Logo className="w-fit" />
            <StyledText fontSize="14px" style={{}}>
              Luma is a powerful Membership Template to Sell your Courses and
              Membership Content.
            </StyledText>
            <div className="flex text-gray-500 my-5">
              <p className="hover-footer">f</p>
              <p className="hover-footer">x</p>
              <p className="hover-footer">I</p>
            </div>
          </div>
          <div className="w-[50%]">
            <div className="rounded-lg border-[#eeeeee1a] border-2  p-5">
              <GradientText className="text-2xl my-5">
                Stay Up-to-Date!
              </GradientText>
              <StyledText fontSize="14px" style={{ marginBottom: "1.25rem" }}>
                Subscribe to our Newsletter to stay up-to-date on latest
                courses, updates, news and discounts from us.
              </StyledText>
              <div
                className="rounded-lg border-[#eeeeee1a] border-2  p-2 footer-input-cont flex"
                style={{
                  background:
                    "linear-gradient(129deg, rgb(36, 36, 36) 0%, rgb(16, 16, 16) 100%)",
                }}
              >
                <input
                  className="bg-transparent outline-none pl-3 footer-input flex-1 mr-2"
                  placeholder="Email"
                  type="email"
                />
                <button className="bg-[#323232] px-4 py-2 rounded-lg">
                  {" "}
                  Join Now
                </button>
              </div>
            </div>
            <div className="my-10 flex justify-end">
              <div className="text-gray-500 ">
                <StyledText>Company</StyledText>
                <p className="hover-footer">About us</p>
                <p className="hover-footer">Contact Us</p>
                <p className="hover-footer">Wall of Love</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 text-gray-400 flex justify-between w-full">
          <p className="">
            Copyright © 2024 - Luma Template for{" "}
            <span className="hover-footer">Framer</span>
            <span className="mr-5">| </span>
            Crafted by <span className="hover-footer mr-2 ">Praveen</span> &
            <span className="ml-2 hover-footer">Roobun</span>
          </p>
          <p>Made with Love </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
