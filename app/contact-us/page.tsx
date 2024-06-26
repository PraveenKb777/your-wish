/* eslint-disable react/no-unescaped-entities */
import GradientText from "@/components/GradientText/GradientText";
import ParticalsEffects from "@/components/Particals/Particals";
import StyledText from "@/components/StyledText/StyledText";
import React from "react";

import Button from "@/components/Button/Button";
import ContactUsForm from "@/components/ContactUsForm/ContactUsForm";
import ConnectBtn from "@/components/ConnectBtn/ConnectBtn";
import Accordian from "@/components/Accordian/Accordian";
import CallUsSvg from "@/components/SVG/CallUsSvg";

import "./index.css";
const ContactUs = () => {
  return (
    <>
      <div className="line" />
      <div className="line line2" />

      <main className="w-[1100px] overflow-x-hidden relative">
        <ParticalsEffects top={1} />
        {/* <div className="contact-us-main fadeShine" /> */}
        <section className="flex w-full items-center min-h-[80vh] justify-between overflow-x-hidden">
          <div className="w-[45%]">
            <GradientText className="text-5xl font-bold my-5">
              How Can We Assist You Today?
            </GradientText>
            <StyledText element="p">
              Need some assistance? Feel free to send us a message using this
              form, and we'll respond promptly!
            </StyledText>
            <div className="flex w-full justify-between mt-4">
              <ConnectBtn
                className="w-[50%]"
                head="Mail Us"
                subHead="motionghost777@gmail.com"
              />
              <ConnectBtn
                Svg={CallUsSvg}
                className="w-[50%]"
                head="Mail Us"
                subHead="motionghost777@gmail.com"
              />
            </div>
          </div>
          <div className="w-[45%]">
            <ContactUsForm />
          </div>
        </section>
        <section className="flex flex-wrap justify-between gap-2">
          <div className="w-[49%]">
            <Accordian>
              <p>Praveen</p>
            </Accordian>
          </div>
          <div className="w-[48%]">
            <Accordian>
              <p>Praveen</p>
            </Accordian>
          </div>
          <div className="w-[48%]">
            <Accordian>
              <p>Praveen</p>
            </Accordian>
          </div>
          <div className="w-[48%]">
            <Accordian>
              <p>Praveen</p>
            </Accordian>
          </div>
          <div className="w-[48%]">
            <Accordian>
              <p>Praveen</p>
            </Accordian>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactUs;
