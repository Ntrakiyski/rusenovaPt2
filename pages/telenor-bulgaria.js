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

import { ContainerApp, Container } from "../assets/Animation.js";

import { useMediaQuery } from "../assets/components/CheckWidth";



const Styles = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  //Main title - My experience...
  h5 {
    margin: 0 0 40px 0;
    line-height: 150%;
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
  const Width1023 = useMediaQuery(1023);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [loaded]);
  //
  const [changeLoc, setChangeLoc] = useState(false);

  return (
    <Styles
      variants={Width1023 ? ContainerApp : Container}
      initial="hidden"
      animate="show"
    >
      {!Width1023 ? (
        <Nav bgColor="#14171b" />
      ) : (
        <NavRes
          changeLoc={changeLoc}
          setChangeLoc={setChangeLoc}
          bgColor="#14171b"
        />
      )}
      {loaded && (
        <div className="content">
          {!changeLoc ? (
            <>
              <Heading />
              <ThreeYears />
              <MyRole />
              <Projects />
              <div className="foot">
                <FooterNavi number="01" menu="About" to="/about" />
                <FooterNavi number="02" menu="Projects" to="/" funct="true" />
                <FooterNavi
                  number="03"
                  menu="Resume"
                  to="/media/GloriaPdf.pdf"
                  target={"_blank"}
                />
              </div>
            </>
          ) : (
            <Hamburger changeLoc={changeLoc} setChangeLoc={setChangeLoc} />
          )}
          <Footer />
        </div>
      )}
    </Styles>
  );
};

export default TelenorPage;
