import { useId, type CSSProperties, type PropsWithChildren } from "react";

interface LiquidChromaPropType {
  w?: number;
  h?: number;
  r?: number; //corner radius
  d1?: number; //darkness opacity
  d2?: number; //darkness blur
  l1?: number; //lightness opacity
  l2?: number; //lightness blur
  c1?: number; //center distortion
  c2?: number; //center size
  b1?: number; //pre-blur
  b2?: number; //post-blur
  c4?: number; //iridescence
  className?: CSSProperties
}
export default function LiquidChroma({
  w = 200,
  h = 200,
  r = 25,
  d1 = 17,
  d2 = 5,
  l1 = 17,
  l2 = 15,
  c1 = 68,
  c2 = 15,
  b1 = 7,
  b2 = 0,
  c4 = 20,
  className = {},
  children
}: PropsWithChildren<LiquidChromaPropType>) {
const filterId = useId();
  return (
    <>
        <svg
        // style="position:absolute;top:-999px;left:-999px"
        style ={{position: "absolute", top: "-999px", left: "-999px"}}
        className="test"
          id="effectSvg"
          width={w}
          height={h}
          viewBox={`0 0 ${w} ${h}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id={filterId} x="0%" y="0%" height={`${(50 + h)/h * 100}%`} width={`${(50 + w)/w * 100}%`}>
            <feImage
              xlinkHref={`data:image/svg+xml,%3Csvg width='${w}' height='${h}' viewBox='0 0 ${w} ${h}' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='${0}' y='${0}' width='${w}' height='${h}' rx='${r}' fill='rgb%280 0 0 %2F${d1 / 2.55}%25%29' /%3E%3Crect x='${0}' y='${0}' width='${w}' height='${h}' rx='${r}' fill='%23FFF' style='filter:blur(${d2}px)' /%3E%3C/svg%3E`}
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="thing9"
              id="thing9"
            />
            <feImage
              xlinkHref={`data:image/svg+xml,%3Csvg width='${w}' height='${h}' viewBox='0 0 ${w} ${h}' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='${0}' y='${0}' width='${w}' height='${h}' rx='${r}' fill='rgb%28255 255 255 %2F${l1 / 2.55}%25%29' style='filter:blur(${l2}px)' /%3E%3C/svg%3E`}
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="thing0"
              id="thing0"
            />
            <feImage
              xlinkHref={`data:image/svg+xml,%3Csvg width='${w}' height='${h}' viewBox='0 0 ${w} ${h}' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='${0}' y='${0}' width='${w}' height='${h}' rx='${r}' fill='%23000' /%3E%3C/svg%3E`}
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="thing1"
              id="thing1"
            />
            <feImage
              xlinkHref={`data:image/svg+xml,%3Csvg width='${w}' height='${h}' viewBox='0 0 ${w} ${h}' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='gradient1' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' stop-color='%23000'/%3E%3Cstop offset='100%25' stop-color='%2300F'/%3E%3C/linearGradient%3E%3ClinearGradient id='gradient2' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23000'/%3E%3Cstop offset='100%25' stop-color='%230F0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' width='${w}' height='${h}' rx='${r}' fill='%237F7F7F' /%3E%3Crect x='${0}' y='${0}' width='${w}' height='${h}' rx='${r}' fill='%23000' /%3E%3Crect x='${0}' y='${0}' width='${w}' height='${h}' rx='${r}' fill='url(%23gradient1)' style='mix-blend-mode: screen' /%3E%3Crect x='${0}' y='${0}' width='${w}' height='${h}' rx='${r}' fill='url(%23gradient2)' style='mix-blend-mode: screen' /%3E%3Crect x='${0}' y='${0}' width='${w}' height='${h}' rx='${r}' fill='rgb%28127 127 127 %2F${(255-c1)/2.55}%25%29' style='filter:blur(${20-c2}px)' /%3E%3C/svg%3E`}
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="thing2"
              id="thing2"
            />
            <feGaussianBlur
              stdDeviation={b1 / 10}
              id="preblur"
              in="SourceGraphic"
              result="preblur"
            />
            <feDisplacementMap
              id="dispR"
              in2="thing2"
              in="preblur"
              scale={-150 + c4 / 10}
              xChannelSelector="B"
              yChannelSelector="G"
            />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0
              0 0 0 0 0
              0 0 0 0 0
              0 0 0 1 0"
              result="disp1"
            />
            <feDisplacementMap
              id="dispG"
              in2="thing2"
              in="preblur"
              scale="-150"
              xChannelSelector="B"
              yChannelSelector="G"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0
              0 1 0 0 0
              0 0 0 0 0
              0 0 0 1 0"
              result="disp2"
            />
            <feDisplacementMap
              id="dispB"
              in2="thing2"
              in="preblur"
              scale={-150 - c4 / 10}
              xChannelSelector="B"
              yChannelSelector="G"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0
              0 0 0 0 0
              0 0 1 0 0
              0 0 0 1 0"
              result="disp3"
            />
            <feBlend in2="disp2" mode="screen" />
            <feBlend in2="disp1" mode="screen" />
            <feGaussianBlur stdDeviation={b2 / 10} id="postblur" />
            <feBlend in2="thing0" mode="screen" />
            <feBlend in2="thing9" mode="multiply" />
            <feComposite in2="thing1" operator="in" />
            {/* <feOffset dx="43" dy="43" /> */}
          </filter>
        </svg>
      <div
        id="preview"
        className="absolute bg-transparent z-10 m-auto"
        style={{...className, width: w, height: h, backdropFilter: `url(#${filterId})`, pointerEvents: "none"}}
        // style="width:200px;height:200px;backdrop-filter:url(#displacementFilter4)/* brightness(0.95)*/;pointer-events: none;"
      >
        {children}
      </div>
    </>
  );
}


