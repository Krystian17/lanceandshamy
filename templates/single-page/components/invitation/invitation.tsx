import { MutableRefObject } from "react";
import '../../styles/invitation.scss'

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
        height: "100vh",
        width: "100%",
      }}
    >
      <video
        height={300}
        width={300}
        className={`invi-video`}
        controls={true}
        poster={`/img/${client}/thumbnail.png`}
        loop
      >
        <source src="/video/ks-1.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Invitation;
