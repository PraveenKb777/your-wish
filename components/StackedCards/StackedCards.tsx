"use client";
import React, { useEffect, useRef, useState } from "react";
import "./index.css";

type animationName = "stackForward" | "none";

export const Card: React.FC<{
  index: number;
  total: number;
  current: number;
  val: number;
  animationName: animationName;
}> = ({ index, val, current, animationName }) => {
  return (
    <div
      className="rounded-lg border-white-100 border-2 absolute"
      style={{
        height: "200px",
        aspectRatio: "16/9",
        background: "grey",
        top: `-${index * 10}px`,
        left: `-${index * 10}px`,
        zIndex: index,
        backgroundColor: `#${val}${val}${val}`,
        transition: "all 300ms",
        animation: "500ms linear ",
        animationName: animationName,
        transformOrigin: "bottom left",
      }}
    >
      {val}
      {current}
    </div>
  );
};

export const StackedCards: React.FC<{ list: any[] }> = ({ list }) => {
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
      <div className="text-white hover:cursor-pointer">
        <h1
          onClick={() => {
            prev();
          }}
        >
          Left
        </h1>
        <h1
          onClick={() => {
            next();
          }}
        >
          Right
        </h1>
      </div>
      <div
        className="relative h-[400px] m-10"
        style={{ color: "white", aspectRatio: "18/12" }}
      >
        {list?.map((_, i) => {
          return (
            <Card
              index={zindex[list.length - i - 1]}
              total={list.length}
              current={index}
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
    </>
  );
};
