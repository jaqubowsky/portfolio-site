"use client";

import useScreenSize from "@/hooks/useScreenSize";
import LinkComponent from "./LinkComponent";
import BurgerMenu from "./BurgerMenu";
import Nav from "./Nav";

const sections = [
  { title: "HOME", url: "#" },
  { title: "ABOUT", url: "#about" },
  { title: "PROJECTS", url: "#projects" },
  { title: "CONTACT", url: "#contact" },
];

const NavBar = () => {
  const screenSize = useScreenSize();

  const sectionsEl = sections.map((section) => {
    return (
      <LinkComponent
        intent="text"
        size="small"
        key={section.title}
        href={section.url}
      >
        {section.title}
      </LinkComponent>
    );
  });

  if (screenSize <= 425) {
    return (
      <Nav>
        <BurgerMenu>{sectionsEl}</BurgerMenu>;
      </Nav>
    );
  } else {
    return <Nav>{sectionsEl}</Nav>;
  }
};

export default NavBar;
