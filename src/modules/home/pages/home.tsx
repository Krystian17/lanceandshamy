import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import "@/styles/main-typography.scss";
import "@/styles/main-variables.scss";
import mainStyle from "@/styles/main-home.module.scss";
import Image from "next/image";
import DebugHUD from "@/modules/debug/debugHUD";

type propType = {
  font: NextFontWithVariable;
};

const HomePage = ({ font }: propType) => {
  const FontVariable = font.variable;

  return (
    <main className={FontVariable}>
      <div className={mainStyle.main}>
        {
          //====================================================
          // Header logo
          //====================================================
        }
        <div className={mainStyle.header}>
          <Image
          priority
            height={500}
            width={500}
            style={{ maxWidth: "50rem", width: "100%", height: "auto" }}
            src="/img/home/logo.svg"
            alt="starts with letter"
          />
          <h1>ANIMATED DIGITAL INVITATION</h1>
        </div>
        {
          //====================================================
          // Social media
          //====================================================
        }
        <div className={mainStyle.socialmedia}>
          <div>
            <a href="https://instagram.com/startswithletter">
              <Image height={500} width={500} src="/img/home/ig.svg" alt="ig" />
              <h3>@startswithletter</h3>
            </a>
            <a href="mailto:startswithletter@gmail.com">
              <Image
                height={500}
                width={500}
                src="/img/home/email.svg"
                alt="email"
              />
              <h3>startswithletter@gmail.com</h3>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
