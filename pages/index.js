import React, { useState, useEffect } from "react";

import styled from "styled-components";

import { Hero } from "../assets/components/HomePage/Hero.js";
import { PlannerApp } from "../assets/components/HomePage/PlannerApp.js";
import { TelenorWork } from "../assets/components/HomePage/TelenorWork.js";
import { Toolbox } from "../assets/components/HomePage/Toolbox.js";

import { FooterNavi } from "../assets/components/Main/FooterNavi.js";
import { Footer } from "../assets/components/Main/Footer.js";
import { Nav } from "../assets/components/Main/Nav.js";
import { NavRes } from "../assets/components/Main/NavRes.js";

import { Hamburger } from "../assets/components/Main/Hamburger.js";
import { Testemonial } from "../assets/components/HomePage/Testemonial.js";

import { useMediaQuery } from "../assets/components/CheckWidth";

export const config = { unstable_runtimeJS: false };

function Index() {
  const Width1023 = useMediaQuery(1023);

  const [changeLoc, setChangeLoc] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [loaded]);
  return (
    <Styles>
      {loaded && (
        <>
          {Width1023 ? (
            <NavRes
              changeLoc={changeLoc}
              setChangeLoc={setChangeLoc}
              bgColor="#14171b"
            />
          ) : (
            <Nav bgColor="#14171b" />
          )}
        </>
      )}
      <div className="content">
        {!changeLoc ? (
          <>
            <Hero loaded={loaded} />
            <PlannerApp />
            <TelenorWork />
            <Testemonial />
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
          <Hamburger changeLoc={changeLoc} setChangeLoc={setChangeLoc} />
        )}
        <Footer />
      </div>
    </Styles>
  );
}

const Styles = styled.div``;

export default Index;
