// import type Question from "@/context/TriviaType";

import type { PropsWithChildren } from "react";

export default function Liquid({ children }: PropsWithChildren) {
  return (
    <>
      <div className="liquid-glass relative">
        <div className="glass-text">{children}</div>
        <div className="absolute h-1 w-1 rounded-full bg-white top-2 right-2"></div>
      </div>

      {/* <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <defs>
          <filter
            id="glass-distortion"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.008 0.008"
              numOctaves="2"
              seed="92"
              result="noise"
            />
            <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="blurred"
              scale="77"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg> */}
      <svg className="test h-0 w-0" style={{ position: "absolute" }}>
        <defs>
          <filter
            id="chromatic-aberration"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            {/* <!-- Red channel --> */}
            <feOffset in="SourceAlpha" dx="-3" dy="0" result="rShift" />
            <feFlood flood-color="red" result="redColor" />
            <feComposite
              in="redColor"
              in2="rShift"
              operator="in"
              result="redOnly"
            />

            {/* <!-- Green channel --> */}
            <feOffset in="SourceAlpha" dx="0" dy="2" result="gShift" />
            <feFlood flood-color="lime" result="greenColor" />
            <feComposite
              in="greenColor"
              in2="gShift"
              operator="in"
              result="greenOnly"
            />

            {/* <!-- Blue channel --> */}
            <feOffset in="SourceAlpha" dx="3" dy="0" result="bShift" />
            <feFlood flood-color="blue" result="blueColor" />
            <feComposite
              in="blueColor"
              in2="bShift"
              operator="in"
              result="blueOnly"
            />

            {/* <!-- Merge all colors with the original --> */}
            <feMerge>
              <feMergeNode in="redOnly" />
              <feMergeNode in="greenOnly" />
              <feMergeNode in="blueOnly" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </>
  );
}
