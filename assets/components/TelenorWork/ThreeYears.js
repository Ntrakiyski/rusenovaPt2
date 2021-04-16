import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import { useMediaQuery } from "react-responsive";

export const ThreeYears = () => {
  const Width1023 = useMediaQuery({
    query: "(min-device-width: 1023px)",
  });
  return (
    <Styles className="setPadding">
      <div className="content">
        {Width1023 && (
          <div className="image">
            <img
              src="/media/images/TelenorPresent.png"
              alt="telenor presentation"
            />
          </div>
        )}
        <div className="heading">
          {!Width1023 && (
            <div className="image">
              <img
                src="/media/images/TelenorPresent.png"
                alt="telenor presentation"
              />
            </div>
          )}
          <p>
            During my three + years at Telenor Bulgaria, I worked on over{" "}
            <span>20 cross-platform</span> projects and had the opportunity to
            collaborate with various teams such as tech, marketing, and product
            owners.
          </p>
        </div>
      </div>
    </Styles>
  );
};
const Styles = styled(motion.div)`
  .image {
    margin: 0px 0 60px 0;
  }
  @media only screen and (min-width: 1023px) {
    display: flex;
    justify-content: center;

    .content {
      max-width: 1200px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .heading,
    p {
      max-width: 480px;
    }
    .image {
      max-height: 453.66px;
      margin-right: 60px;
      max-width: 700px;
      margin-bottom: 0px;
    }
  }
`;
