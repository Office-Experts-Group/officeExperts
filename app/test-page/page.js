import React from "react";

import ServiceHero from "../../components/ServiceHero";
import Contact from "../../components/Contact";

import graphic from "../../public/pageHeros/graphic.webp";
import graphTableMob from "../../public/pageHeros/mob/graphTableMob.webp";

const Page = () => {
  return (
    <>
      <ServiceHero
        title={"Custom Online Solutions"}
        desktopImage={graphic}
        mobileImage={graphTableMob}
        altDesk={"digital graphic"}
        altMob={"graphs on a table"}
      />
      <Contact />
    </>
  );
};

export default Page;
