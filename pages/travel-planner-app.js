import React, { useState } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import { useMediaQuery } from "react-responsive";

import { FooterNavi } from "../assets/components/Main/FooterNavi";
import { Nav } from "../assets/components/Main/Nav";
import { NavRes } from "../assets/components/Main/NavRes";
import { Footer } from "../assets/components/Main/Footer";
import { Hamburger } from "../assets/components/Main/Hamburger";

import { ContainerApp, Container } from "../assets/Animation.js";

import { Hero } from "../assets/components/TravelApp/1Hero";
import { TheProcess } from "../assets/components/TravelApp/2TheProcess";
import { LookingBack } from "../assets/components/TravelApp/3LookingBack";
import { ProblemStatement } from "../assets/components/TravelApp/4ProblemStatement";
import { Solution } from "../assets/components/TravelApp/5Solution";
import { Survey } from "../assets/components/TravelApp/6Survey";
import { Interviews } from "../assets/components/TravelApp/7Interviews";
import { Emphaty } from "../assets/components/TravelApp/8Emphaty";
import { Persona } from "../assets/components/TravelApp/9Persona";
import { UserJourney } from "../assets/components/TravelApp/10UserJourney";
import { Functionalities } from "../assets/components/TravelApp/11Functionalities";
import { Architecture } from "../assets/components/TravelApp/11.5Architecture";
import { Sketching } from "../assets/components/TravelApp/12Sketching";
import { Styling } from "../assets/components/TravelApp/13Styles";
import { SeccondPart } from "../assets/components/TravelApp/SeccondPart";

const TravelPage = () => {
  const [changeLoc, setChangeLoc] = useState(false);
  const Width600 = useMediaQuery({
    query: "(max-device-width: 600px)",
  });
  const Width1023 = useMediaQuery({
    query: "(min-device-width: 1023px)",
  });

  return (
    <TravelAppStyles
      className="TravelAppRes"
      variants={Width600 ? ContainerApp : Container}
      initial="hidden"
      animate="show"
    >
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
          <TheProcess />
          <LookingBack />
          <ProblemStatement />
          <Solution />
          <Survey />
          <Interviews />
          <Emphaty />
          <Persona />
          <UserJourney />
          <Functionalities />
          <Architecture />
          <Sketching />
          <Styling />
          <SeccondPart />
        </>
      ) : (
        <Hamburger />
      )}
      <div className="footer">
        <FooterNavi
          number="01"
          menu="Telenor experience"
          to="/telenor-bulgaria"
        />
        <FooterNavi number="02" menu="About" to="/about" />
        <FooterNavi
          number="03"
          menu="Resume"
          to="/media/GloriaPdf.pdf"
          target={"_blank"}
        />
      </div>
    </TravelAppStyles>
  );
};

const TravelAppStyles = styled(motion.div)`
  .footer {
    margin-top: 40px;
  }
  p {
  }
  @media only screen and (min-width: 1023px) {
    p {
      max-width: 760px;
    }
  }
`;

export default TravelPage;
