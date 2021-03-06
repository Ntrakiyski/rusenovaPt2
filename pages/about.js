import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import { Heading } from "../assets/components/AboutMe/Heading";
import { SectionRight } from "../assets/components/AboutMe/SectionRight";
import { SectionLeft } from "../assets/components/AboutMe/SectionLeft";
import { MyStory } from "../assets/components/AboutMe/MyStory";
import { Transition } from "../assets/components/AboutMe/Transition";

import { FooterNavi } from "../assets/components/Main/FooterNavi";
import { Nav } from "../assets/components/Main/Nav";
import { NavRes } from "../assets/components/Main/NavRes";
import { Footer } from "../assets/components/Main/Footer";
import { Hamburger } from "../assets/components/Main/Hamburger";

import { ContainerApp, Container } from "../assets/Animation.js";
import { useMediaQuery } from "../assets/components/CheckWidth";

const AboutMeStyles = styled(motion.div)`
  margin-top: 60px;
  .content {
    p {
      font-size: 18px;
    }
    span {
      font-size: 18px;
    }
    h5 {
      font-family: "Gilroy-Light";
      font-size: 32px;
      font-weight: 400;
    }
    h3 {
      font-size: 20px;
    }
    @media only screen and (min-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .content {
        //set the width of the content

        max-width: 1200px;
      }

      h5 {
        font-size: 44px;
      }
    }
  }
`;

const AboutMe = () => {
  const Width1023 = useMediaQuery(1023);
  const Width600 = useMediaQuery(600);

  const [loaded, setLoaded] = useState(false);
  const [changeLoc, setChangeLoc] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, [loaded]);

  return (
    <AboutMeStyles
      variants={Width600 ? ContainerApp : Container}
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

              <SectionRight
                number="01"
                key="1"
                title="Collaboration"
                paragraph="Everything, in my opinion, begins with learning to listen to one another and understand different points of view. When designing a product, open and effective communication is critical."
                imgSrc="/media/images/TableTalk.png"
              />

              <SectionLeft
                key="2"
                number="02"
                title="Action"
                paragraph="I believe that creativity can improve our everyday life, but we also have to be humble and grounded if we want to go through the whole process."
                imgSrc="/media/images/TelenorDoor.png"
              />
              <SectionRight
                key="3"
                number="03"
                title="Quality"
                paragraph="I love what I do, and I pay attention to the smallest details. In my experience, Agile, design thinking and Sprints help to carry out projects and to improve their quality."
                imgSrc="/media/images/BoardDraw.png"
              />
              <MyStory />
              <Transition />

              <div className="foot">
                {/* <FooterNavi
                  number="01"
                  to="/media/GloriaPdf.pdf"
                  target={"_blank"}
                  menu="Resume"
                /> */}
                <FooterNavi number="02" to="/" menu="Projects" funct={true} />
              </div>
            </>
          ) : (
            <Hamburger changeLoc={changeLoc} setChangeLoc={setChangeLoc} />
          )}
          <Footer />
        </div>
      )}
    </AboutMeStyles>
  );
};

export default AboutMe;
