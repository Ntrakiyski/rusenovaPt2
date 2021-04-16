import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import { FooterNavi } from "../assets/components/Main/FooterNavi.js";
import { Footer } from "../assets/components/Main/Footer.js";
import { Nav } from "../assets/components/Main/Nav.js";
import { NavRes } from "../assets/components/Main/NavRes.js";
import { Hamburger } from "../assets/components/Main/Hamburger.js";

//Import page components
import { ThreeYears } from "../assets/components/TelenorWork/ThreeYears";
import { Projects } from "../assets/components/TelenorWork/Projects";
import { MyRole } from "../assets/components/TelenorWork/MyRole";
import { Heading } from "../assets/components/TelenorWork/Heading";

import { useMediaQuery } from "react-responsive";

import { ContainerApp, Container } from "../assets/Animation.js";

import { MediaQuerySSR } from "react-responsive-ssr";

import { Context as ResponsiveContext } from "react-responsive";


const Styles = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  //Main title - My experience...
  h5 {
    margin: 0 0 40px 0;
  }
  //Section titles - Internships...
  h3 {
    margin-bottom: 40px;
  }
  //Coloring the words in the paragraphs
  span {
    border-bottom: 2px solid #dc2020;
  }
  p {
    font-size: 18px;
  }
  img {
    width: 100%;
  }
  //Number before section
  .numberSpan {
    color: #8e8e8e;
    margin-bottom: 15px;
  }
  //Sub-title under title in section - Travel insurance
  .sub {
    margin-bottom: 20px;
    margin-top: -20px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    .content {
    }
    .image {
      width: 70%;
    }
    .numberSpan {
      font-size: 20px;
    }
  }
  @media only screen and (min-width: 1023px) {
    //Main title - My experience...

    .content {
      max-width: 1400px;
      margin-top: 40px;
    }
    h5 {
      margin-bottom: 70px;
    }
    //Section titles - Internships...
    h3 {
      margin-bottom: 30px;
    }
    p {
      font-size: 28px;
    }

    .numberSpan {
      font-size: 20px;
    }
  }
`;

const TelenorPage = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [loaded]);
  //
  const [changeLoc, setChangeLoc] = useState(false);
  const Width1023 = useMediaQuery({
    query: "(min-device-width: 1023px)",
  });
  const Width600 = useMediaQuery({
    query: "(min-device-width: 600px)",
  });
  return (
    <Styles
      variants={Width600 ? ContainerApp : Container}
      initial="hidden"
      animate="show"
    >
      {loaded && (
        <>
          <ResponsiveContext.Provider maxWidth={1023}>
            <NavRes
              changeLoc={changeLoc}
              setChangeLoc={setChangeLoc}
              bgColor="#14171b"
            />
          </ResponsiveContext.Provider>
          <ResponsiveContext.Provider minWidth={1024}>
            <Nav bgColor="#14171b" />
          </ResponsiveContext.Provider>
        </>
      )}
      <div className="content">
        {!changeLoc ? (
          <>
            <Heading />
            <ThreeYears />
            <MyRole />
            <Projects />
            <div className="foot">
              <FooterNavi number="01" menu="About" to="/about" />
              <FooterNavi number="02" menu="Projects" to="/" />
              <FooterNavi
                number="03"
                menu="Resume"
                to="/media/GloriaPdf.pdf"
                target={"_blank"}
              />
            </div>
          </>
        ) : (
          <Hamburger />
        )}
        <Footer />
      </div>
    </Styles>
  );
};

export default TelenorPage;
