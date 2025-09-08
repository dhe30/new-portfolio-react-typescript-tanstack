import { createFileRoute } from '@tanstack/react-router'
import Collection from '../components/Collection'
import Webdev from "../assets/CollectionImage2.png"
import LiquidChroma from '../components/LiquidChroma'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <>    <Collection title={"Web Dev"} src={Webdev} description={"description"} tags={['React', 'TypeScript']}></Collection>

                    {/* <LiquidChroma w={400} h={400}></LiquidChroma> */}
</>
  )
}