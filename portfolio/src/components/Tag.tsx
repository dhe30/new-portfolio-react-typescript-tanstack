import { useEffect, useRef, useState } from "react";
import Liquid from "./Liquid";
import LiquidChroma  from "./LiquidChroma";

interface TagType {
  name: string;
}
export default function Tag({ name }: TagType) {
    const [h, setH] = useState(0);
        const [w, setW] = useState(0)

  const chromaRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = chromaRef.current?.parentElement;
    if (el) {
      const { width, height } = el.getBoundingClientRect();
      console.log(width, height);
      setH(height)
      setW(width)
    }
  }, []);
  return (
    <div className="relative w-fit h-fit inline-block"> 
    <div className="absolute overflow-hidden h-full z-0" style={{width:"100%"}}>
    <span className="absolute z-0 inline-block h-full w-full text-xs" style={{top: "-10px", left: "75px"}}>{name}</span>

    <LiquidChroma  w={w}  h={h}></LiquidChroma>
    </div>
    <Liquid>
      <span ref={chromaRef} className="inline-block mx-5 my-2 archivo-black-regular text-md">
        {name}
      </span>
    </Liquid>
    </div>

  );
}
