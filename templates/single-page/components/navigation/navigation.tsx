"use client";

import Image from "next/image";
import "../../styles/nav.scss";
import shimmer from "@/components/shimmer";
import toBase64 from "@/components/base64";
import dynamic from "next/dynamic";
import { NavList } from "@/types/navlist";

import Burger from "@/Icons/Burger";
import Close from "@/Icons/Close";
import { useState } from "react";
import { useRouter } from "next/navigation";

const NavigationList = dynamic(() => import("./navigation-list"));

type propType = {
  client: string;
  navlist: NavList;
};

const Navigation = ({ client, navlist }: propType) => {
  const router = useRouter()
  const [isOpen, setOpen] = useState<boolean>(false);
  const iconSize = "2.188rem";

  const sidebarToggler = () => {
    setOpen(!isOpen);
  };

  return (
    <nav className="navmain">
      <div className="content">
        <div className="menu" onClick={sidebarToggler}>
          {isOpen ? (
            <Close height={iconSize} width={iconSize} fill={undefined} />
          ) : (
            <Burger height={iconSize} width={iconSize} fill={undefined} />
          )}
        </div>
        <Image
        onClick={()=>router.push('#home')}
          className="content-img"
          src={`/img/${client}/logo.png`}
          placeholder={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475)
          )}`}
          width={300}
          height={300}
          quality={80}
          alt="logo"
        />

        <div className="menu"></div>
      </div>
      <div className={`nav-container ${isOpen ? 'active' : ''}`}>
        <NavigationList client={client} navList={navlist} setOpen={setOpen} />
      </div>
    </nav>
  );
};

export default Navigation;
