import React, { useState } from "react";

import { Hero } from "../assets/components/HomePage/Hero.js";
import { PlannerApp } from "../assets/components/HomePage/PlannerApp.js";
import { TelenorWork } from "../assets/components/HomePage/TelenorWork.js";
import { Toolbox } from "../assets/components/HomePage/Toolbox.js";

import { FooterNavi } from "../assets/components/Main/FooterNavi.js";
import { Footer } from "../assets/components/Main/Footer.js";
import { Nav } from "../assets/components/Main/Nav.js";
import { NavRes } from "../assets/components/Main/NavRes.js";

import { useMediaQuery } from "react-responsive";
import { Hamburger } from "../assets/components/Main/Hamburger.js";

function Index() {
  const Width1023 = useMediaQuery({
    query: "(min-device-width: 1023px)",
  });

  const [changeLoc, setChangeLoc] = useState(false);
  return (
    <div>
      {Width1023 ? (
        <Nav bgColor="#14171b" />
      ) : (
        <NavRes
          changeLoc={changeLoc}
          setChangeLoc={setChangeLoc}
          bgColor="#14171b"
        />
      )}
      {!changeLoc ? (
        <>
          <Hero />
          <PlannerApp />
          <TelenorWork />
          <Toolbox />
          <FooterNavi number="01" menu="About" to="/about" />
          <FooterNavi
            number="02"
            menu="Resume"
            to="/media/GloriaPdf.pdf"
            target={"_blank"}
          />
        </>
      ) : (
        <Hamburger />
      )}
      <Footer />
    </div>
  );
}

export default Index;
