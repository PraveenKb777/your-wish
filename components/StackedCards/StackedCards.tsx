"use client";
import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import CONTENT, { Review } from "@/content";
import { Avatar } from "../Avatar/Avatar";

type animationName = "stackForward" | "none";

export const Card: React.FC<{
  index: number;
  total: number;
  current: number;
  val: number;
  animationName: animationName;
  height?: number;
  item: Review;
}> = ({ index, val, current, animationName, height = 300, item }) => {
  return (
    <div
      className="rounded-lg border-[#eeeeee1a] border-2 absolute p-5 stack-card"
      style={{
        height: `${height}px`,
        overflowY: "scroll",
        scrollbarWidth: "none",
        aspectRatio: "16/9",
        background:
          "linear-gradient(129deg, rgb(36, 36, 36) 0%, rgb(16, 16, 16) 100%)",
        top: `${-index * 10}px`,
        left: `${-index * 10}px`,
        zIndex: index,
        transition: "all 300ms",
        animation: "500ms linear ",
        animationName: animationName,
        transformOrigin: "bottom left",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        focusable="false"
        className="h-6 w-6"
        fill="#ffffff80"
        style={{ transform: "rotateY(180deg)" }}
      >
        <g>
          <path d="M116,72v88a48.05,48.05,0,0,1-48,48,8,8,0,0,1,0-16,32,32,0,0,0,32-32v-8H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56h60A16,16,0,0,1,116,72ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Z"></path>
        </g>
      </svg>
      <p className="text-xl font-thin my-4">{item.content}</p>
      <div className="flex w-full">
        <Avatar src={""} className="self-center mr-5" />
        <div>
          <h6 className="font-semibold text-lg">{item.author}</h6>
          <p className="text-xs">
            {item.authorRole} {"   "}
            {/* <span className="text-yellow-300 mt-2 ">{item.rating}</span> */}
          </p>
        </div>
      </div>
    </div>
  );
};

export const StackedCards: React.FC<{ list: Review[] }> = ({ list }) => {
  const [index, setIndex] = useState<number>(0);
  const [zindex, setZindex] = useState<number[]>(list.map((_, i) => i));
  const [animationName, setanimationName] = useState<{
    animationName: animationName;
    animationIndex: number;
  }>({ animationName: "none", animationIndex: 0 });
  const animationDone = useRef(true);
  const next = () => {
    // let oldIndex;
    if (animationDone.current) {
      animationDone.current = false;
      setIndex((e) => {
        const newIndex = e === list.length - 1 ? 0 : e + 1;
        //   oldIndex = e;
        return newIndex;
      });

      let a = [...zindex];
      let newZindexList = [...a.slice(1, list.length), ...a.slice(0, 1)];
      setanimationName({
        animationName: "stackForward",
        animationIndex: index,
      });
      setTimeout(() => setZindex(newZindexList), 375);
      setTimeout(() => {
        animationDone.current = true;
        setanimationName({
          animationName: "none",
          animationIndex: index,
        });
      }, 500);
    }
  };

  const prev = () => {
    if (animationDone.current) {
      animationDone.current = false;
      setIndex((e) => {
        const newIndex = e === 0 ? list.length - 1 : e - 1;

        return newIndex;
      });
      const newIndex = index === 0 ? list.length - 1 : index - 1;

      let zindexList = [...zindex];
      let newZindexList = [
        ...zindexList.splice(list.length - 1, list.length),
        ...zindexList.splice(0, list.length - 1),
      ];

      setTimeout(() => setZindex(newZindexList), 375);
      setanimationName({
        animationName: "stackForward",
        animationIndex: newIndex,
      });
      setTimeout(() => {
        animationDone.current = true;

        setanimationName({
          animationName: "none",
          animationIndex: newIndex,
        });
      }, 500);
    }
  };

  return (
    <>
      <div className="text-white hover:cursor-pointer flex my-3">
        <svg
          onClick={() => {
            prev();
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          fill="rgb(255, 255, 255)"
          className="h-8 w-8 p-1 rounded-lg border-[#eeeeee1a] border-[1px]  bg-gradient-to-r from-[#ffffff17] mr-5"
        >
          <g fill="rgb(255, 255, 255,0.5)">
            <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
          </g>
        </svg>

        <svg
          onClick={() => {
            next();
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          focusable="false"
          fill="rgb(255, 255, 255)"
          className="h-8 w-8 p-1 rounded-lg border-[#eeeeee1a] border-[1px]  bg-gradient-to-r from-[#ffffff17]"
        >
          <g fill="rgb(255, 255, 255,0.5)">
            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
          </g>
        </svg>
      </div>
      <div
        className="relative h-[350px] m-10 flex stack-card "
        style={{
          color: "white",
          aspectRatio: "18/12",
          left: -list.length * 10,
        }}
      >
        <div
          className="h-20 w-1 self-center rounded-full overflow-hidden  mr-10 relative"
          style={{ backgroundColor: "rgba(238, 238, 238, 0.05)" }}
        >
          <div
            className=" w-ful transition-all"
            style={{
              height: `${((index + 1) * 100) / list.length}%`,
              backgroundColor: "white",
            }}
          />
        </div>
        <div className="relative top-10 left-10 bg-green-500 w-7 h-7">
          {list?.map((e, i) => {
            return (
              <Card
                index={zindex[list.length - i - 1]}
                total={list.length}
                current={index}
                key={e.author + e.rating + i}
                item={e}
                val={i}
                animationName={
                  animationName.animationIndex === i
                    ? animationName.animationName
                    : "none"
                }
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
