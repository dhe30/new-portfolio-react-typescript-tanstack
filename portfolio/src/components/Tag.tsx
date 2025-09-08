import { useEffect, useRef, useState } from "react";
import Liquid from "./Liquid";
import LiquidChroma from "./LiquidChroma";

interface TagType {
  name: string;
}
export default function Tag({ name }: TagType) {
  const [h, setH] = useState(0);
  const [w, setW] = useState(0);

  const chromaRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = chromaRef.current?.parentElement;
    if (el) {
      const { width, height } = el.getBoundingClientRect();
      console.log(width, height);
      setH(height);
      setW(width);
    }
  }, []);
  return (
    <div className="relative w-fit h-fit inline-block">
      <div
        className="absolute h-full z-0 overflow-hidden rounded-4xl"
        style={{ width: "100%" }}
      >
        <span
          className="absolute z-0 inline-block h-full w-full text-xs"
          style={{ top: "4px", left: "65px" }}
        >
          {name}
        </span>

        <LiquidChroma w={w} h={h} r={30}></LiquidChroma>
      </div>
      <Liquid>
        <span
          ref={chromaRef}
          // archivo-black-regular
          className="inline-block mx-5 my-2 text-md inter-bold white-shadow"
        >
          {name}
        </span>
      </Liquid>
    </div>
  );
}
