import LiquidChroma from "./LiquidChroma"
import Tag from "./Tag"

interface CollectionPropType {
    tags: Array<string>,
    title: string,
    src: string,
    description: string
}
export default function Collection({tags, title, src, description} : CollectionPropType) {
    return (
        <div className="flex flex-wrap flex-row mx-auto justify-center test  w-fit">
            <div className="test flex-initial order-2 flex flex-col content-between w-fit m-5" style={{}}>
                <div className="flex flex-1 justify-end">
                    <h1 className="archivo-black-bold test inline-block w-fit text-5xl sm:text-8xl md:text-9xl lg:text-9xl" style={{maxWidth: "28rem"}}> {title}</h1>
                </div>
                <div className="flex flex-1 mt-3 gap-1">
                    {tags.map(tag => <Tag name={tag}></Tag>)}
                </div>
                <div className="flex  flex-1">
                    <p> {description} </p>
                </div>
                <div className="flex  flex-1">
                <button type="button">Button</button>
                </div>
                                    <LiquidChroma w={200} h={200}></LiquidChroma>
            </div>
            <div className="flex-1 self-center bg-transparent">
                <img src={src} className="max-w-full h-auto test bg-transparent" style={{maxHeight: "600px", minWidth: "300px"}}></img>
            </div>
        </div>
    )
}