import type { PropsWithChildren } from 'react'
// import type Question from "@/context/TriviaType";
import image from "../assets/image (1).png"
interface LiquidDistortionPropType {
  className?: string,
}
export default function LiquidDistortion({
    className="", children
}: PropsWithChildren<LiquidDistortionPropType>) {
  return (
    <>
    {/* id="btn" */}
      <div className={`glass z-10 ${className}`}>
        {/* <div className="absolute w-full h-full selector"></div> */}
        {children}
      </div>
      <svg className='absolute h-0 w-0'>
  <filter id="frosted" primitiveUnits="objectBoundingBox">
    <feImage href={image} x="0" y="0" width="1" height="1" result="map"/>
    <feGaussianBlur in="SourceGraphic" stdDeviation="0.02" result="blur"/>
    <feDisplacementMap id="disp" in="blur" in2="map" scale="1" xChannelSelector="R" yChannelSelector="G">
      <animate attributeName="scale" to="1.4" dur="0.3s" begin="btn.mouseover"  fill="freeze"/>
      <animate attributeName="scale" to="1" dur="0.3s" begin="btn.mouseout"   fill="freeze"/>
    </feDisplacementMap>
  </filter>
</svg>
    </>
  )
}
