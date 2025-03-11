import { Texts } from "../../lib/text";
import ImageBanner from "../imagebanner/image-banner";
import "../../styles/hero-section.scss";
import { useRouter } from "next/navigation";

type propType = {
  client: string;
};

const HeroSection = ({ client }: propType) => {
  const router = useRouter()

  const RSVPHandler = ()=>{
    router.push('#rsvp')
  }

  return (
    <section
      id="home"
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
        height: "100vh",
      }}
    >
      <div
        className="herotext"
      >
        <h1>{Texts.heroText}</h1>
        <button onClick={RSVPHandler}>{Texts.heroRSVPButton}</button>
      </div>
      <ImageBanner client={client} />
    </section>
  );
};

export default HeroSection;
