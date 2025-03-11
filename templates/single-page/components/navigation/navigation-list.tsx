"use client";
import { useEffect } from "react";
import "../../styles/nav.scss";
import { NavList } from "@/types/navlist";
import Link from "next/link";

type propType = {
  client: string;
  navList: NavList;
  setOpen: Function;
};

const NavigationList = ({ client, navList, setOpen }: propType) => {
  let currentWindow;
  let sections: any;
  let navLinks: any;
  let sectionTop;
  let sectionHeight;

  useEffect(() => {
    if (typeof document !== "undefined") {
      const pathURL = window.location;
      const clientURL = pathURL.pathname + pathURL.hash;
      currentWindow = window.scrollY;
      sections = document.querySelectorAll("section");
      navLinks = document.querySelectorAll("li a");

      document.addEventListener("scroll", () => {
        sections.forEach((section: any, index: number) => {
          sectionTop = Math.round(section.offsetTop) - 100;
          sectionHeight = Math.round(section.offsetHeight);

          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks[index].classList.add("active");
          } else {
            navLinks[index].classList.remove("active");
          }
        });
      });

      if (clientURL === `/${client}#${navList[1].id}`) {
        navLinks[1].classList.add("active");
        return;
      }

      if (clientURL === `/${client}#${navList[2].id}`) {
        navLinks[2].classList.add("active");
        return;
      }

      if (
        pathURL.pathname === `/${client}` ||
        clientURL === `/${client}#${navList[0].id}`
      ) {
        navLinks[0].classList.add("active");
        return;
      }
    }
  }, []);

  return (
    <ul>
      {navList.map((nav, index) => (
        <li key={index}>
          <Link href={nav.url} onClick={() => setOpen(false)}>
            <p>{nav.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavigationList;
