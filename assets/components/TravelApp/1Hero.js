import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useMediaQuery } from "react-responsive";

const StylesHero = styled(motion.div)`
  display: flex;
  flex-direction: column;
  h1 {
    margin: 40px 0 20px 0;
  }
  .role {
    margin-top: 30px;
    p {
      margin: 7px 0;
    }
    span {
      font-weight: 700;
      font-family: "Gilroy-ExtraBold";
    }
  }
  img {
    max-width: 335px;
    margin-top: 30px;
    align-self: center;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    img {
      width: 70%;
      margin-top: 50px;
    }
  }
  @media only screen and (min-width: 1023px) {
    flex-direction: row;
    align-items: center;

    .heading {
      padding-right: 10%;
      max-width: calc(50vw - 20%);
    }
    img {
      max-width: 550px;
    }
  }
`;

export const Hero = () => {
  const Width768 = useMediaQuery({
    query: "(min-device-width: 768px)",
  });
  return (
    <StylesHero className="title setPadding">
      <div className="heading">
        <p>2021 UX/UI</p>
        <h1>Travel Planner App</h1>
        <p>
          A social-oriented app that helps you find places based on your
          personality and plan your trip together with your friends
        </p>
        <div className="role">
          <p>
            <span> Role:</span> Product design
          </p>
          <p>
            <span> Timeline:</span> 5 weeks
          </p>
        </div>
      </div>
      <img
        src={
          Width768
            ? "/media/images/resized/Image 1.png"
            : "/media/images/resized/Image 1R.png"
        }
        alt="auto-fill"
      />
    </StylesHero>
  );
};
