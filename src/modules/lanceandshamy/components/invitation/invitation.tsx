import "../../styles/invitation.scss";
import Image from "next/image";
import toBase64 from "@/components/base64";
import shimmer from "@/components/shimmer";

type propType = {
  client: string;
};

const Invitation = ({ client }: propType) => {
  return (
    <section
      id="invitation"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
        padding: "3rem 0rem",
        height: "100vh",
        width: "100%",
      }}
    >
       <video
        height={300}
        width={300}
        className={`invi-video`}
        controls={true}
        poster={`/img/${client}/invite/invite.png`}
        loop
      >
        <source src="/video/lanceandshamy.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Invitation;


