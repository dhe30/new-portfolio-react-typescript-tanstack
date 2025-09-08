export default function GooeyButton() {
    return (
        <>
        <svg className="hidden">
            <defs>
                <filter id="gooey">
                    <feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur"></feGaussianBlur>
                    <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
                    <feBlend in="SourceGraphic" in2={"goo"}></feBlend>
                </filter>
            </defs>
        </svg>
        <button className="test bg-transparent! goo-parent content-center justify-start" style={{filter: "url(#gooey)"}}>
            <div className="w-fit main-goo p-4 rounded-3xl test">
                Learn More
            </div>
            <div className="secondary-goo p-4 rounded-4xl test">
               {">"} 
            </div>
        </button>
        </>
    )
}