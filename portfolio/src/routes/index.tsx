import { createFileRoute } from "@tanstack/react-router";
import Collection from "../components/Collection";
import Webdev from "../assets/CollectionImage2.png";
import Showcase from "../components/Showcase";
import ButtonCircle from "../components/ButtonCircle";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Collection
        title={"Web Dev"}
        src={Webdev}
        description={"description"}
        tags={["React", "TypeScript"]}
      ></Collection>
        <Showcase></Showcase>
        {/* <ButtonCircle></ButtonCircle> */}
    </>
  );
}
