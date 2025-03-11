"use client";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import Navigation from "./components/navigation/navigation";
import { NavList } from "@/types/navlist";
import Invitation from "./components/invitation/invitation";
import RSVP from "./components/rsvp/rsvp";
import HeroSection from "./components/hero-section/hero-section";

import "./styles/layout.scss";
import "./styles/typography.scss";
import "./styles/button.scss";
import "./styles/input.scss";
import DebugHUD from "@/modules/debug/debugHUD";



type propType = {
  header: NextFontWithVariable;
  body: NextFontWithVariable;
  BaseSettings:{
    baseUrl: string;
    client: string;
  }
};

const RSVPMain = ({BaseSettings, header, body }: propType) => {
  const ClientName = BaseSettings.client;

  const navlist: NavList = [
    { name: "Home", url: `/${ClientName}#home`, id: "home" },
    {
      name: "Invitation",
      url: `/${ClientName}#invitation`,
      id: "invitation",
    },
    { name: "RSVP", url: `/${ClientName}#rsvp`, id: "rsvp" },
  ];

  return (
    <main className={`${header.variable} ${body.variable} mainlayout`}>
      <Navigation client={ClientName} navlist={navlist} />
      <HeroSection client={ClientName} />
      <Invitation client={ClientName} />
      <RSVP client={ClientName} />
    </main>
  );
};

export default RSVPMain;
