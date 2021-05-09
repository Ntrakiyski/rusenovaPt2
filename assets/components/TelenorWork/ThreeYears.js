import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

const StylesThreeYears = styled(motion.div)`
  .image {
    margin: 0px 0 60px 0;
  }
  @media only screen and (min-width: 1023px) {
    display: flex;
    justify-content: center;

    .content {
      max-width: 1200px;
      display: flex;
      justify-content: space-between;
    }
    .heading,
    p {
      max-width: 440px;
    }
    .image {
      max-height: 453.66px;
      margin-right: 60px;
      max-width: 700px;
      margin-bottom: 0px;
    }
  }
`;

export const ThreeYears = () => {
  return (
    <StylesThreeYears className="setPadding">
      <div className="content">
        <div className="image">
          <img
            src="/media/images/TelenorPresent.png"
            alt="telenor presentation"
          />
        </div>

        <div className="heading">
          <p>
            During my three + years at Telenor Bulgaria, I worked on over{" "}
            <span>20 cross-platform</span> projects and had the opportunity to
            collaborate with various teams such as tech, marketing, and product
            owners.
          </p>
        </div>
      </div>
    </StylesThreeYears>
  );
};
