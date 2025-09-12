import { motion } from "motion/react";
import { useState } from "react";
import image from "../assets/example.png";
import LiquidDistortion from "./LiquidDistortion";
import LiquidChroma from "./LiquidChroma";
import LeftTriangle from "./icons/LeftTriangle";
export default function Showcase() {
  const items = ["Apples", "Bananas", "Oranges", "Pears"];
  const [current, setCurrent] = useState(0);
  const left = (i: number) => (i - 1 < 0 ? items.length - 1 : i - 1);
  const right = (i: number) => (i + 1) % items.length;
  function role(i: number) {
    if (i == current) return "current";
    if (i == left(current)) return "left";
    if (i == right(current)) return "right";
    return "hidden";
  }
  const width = 375;
  const variants = {
    center: { x: 0, scale: 1.3 },
    left: { x: -width, scale: 0.8 },
    right: { x: width, scale: 0.8 },
    hidden: { x: 0, opacity: 0 },
  };
  return (
    <div className="neutral py-5 w-full flex flex-row justify-center overflow-hidden">
      <div
        className="neutral test relative flex-1 flex flex-col items-center"
        style={{ height: "300px", maxWidth: `${width * 3}px` }}
      >
        <div className="w-full flex-0 block h-5 text-2xl examples relative flex flex-wrap">
          <span className="darken-examples mb-2">Examples</span>
          <span className="ml-auto mb-2"><span className="darken-examples">{current + 1}<span className="text-xl examples">/{items.length}</span></span></span>
          <hr className="basis-full"></hr>
        </div>
        <button
          onClick={() => setCurrent(left(current))}
          className="absolute absolute-vertical left-1 bg-transparent! z-10 h-20 w-20 rounded-full! p-0! white-morphism outline-none!"
        >
          <LiquidDistortion className="">
            <LeftTriangle height={20} width={20} transform="rotate(270)"></LeftTriangle>
          </LiquidDistortion>
        </button>
        <div className="neutral test mt-10" style={{ width: "350px" }}>
          {items.map((item, index) => {
            return (
              <motion.div
                variants={variants}
                animate={role(index)}
                transition={{ type: "spring" }}
                className="test absolute m-auto w-fit h-fit showcase rounded-2xl"
              >
                <img src={image} className="showcase-image z-0"></img>
                {item}
                {/* <LiquidChroma w={325} h={50} className={{bottom:10}}></LiquidChroma> */}
              </motion.div>
            );
          })}
        </div>
        <button
          onClick={() => setCurrent(right(current))}
          className="absolute absolute-vertical right-1 bg-transparent! z-10 h-20 w-20 rounded-full! p-0! white-morphism outline-none!"
        >
          <LiquidDistortion className="">
            <LeftTriangle height={20} width={20} transform="rotate(90)"></LeftTriangle>
          </LiquidDistortion>
        </button>
      </div>
    </div>
  );
  //array state of 5 numbers corresponding to index in items
  //map first number to hiddenLeft, second to sideLeft, etc
  //left and right operations slide the state
}
