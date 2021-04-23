import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import { useMediaQuery } from "react-responsive";

export const SectionRight = ({ imgSrc, title, paragraph, number }) => {
  const Width1023 = useMediaQuery({
    query: "(min-device-width: 1023px)",
  });

  return (
    <Styles className="setPadding">
      <div className="text">
        {!Width1023 && (
          <div>
            <span>- {number} -</span>
            <h3>{title}</h3>
          </div>
        )}
        {Width1023 ? (
          <div className="Flexresponse">
            <motion.div className="heading">
              {Width1023 && (
                <div>
                  <span>- {number} -</span>
                  <h3>{title}</h3>
                </div>
              )}
              <p>{paragraph}</p>
            </motion.div>
            <motion.div className="image">
              <img src={imgSrc} alt="talk on a table" />
            </motion.div>
          </div>
        ) : (
          <div className="Flexresponse">
            <div className="image">
              <img src={imgSrc} alt="talk on a table" />
            </div>
            <p>{paragraph}</p>
          </div>
        )}
      </div>
    </Styles>
  );
};

const Styles = styled(motion.div)`
  h3 {
    font-family: "Gilroy-ExtraBold";
    margin: 28px 0 15px 0;
  }
  .text {
    span {
      color: #8e8e8e;
    }
  }
  .image {
    margin: 50px 0 30px 0;

    img {
      width: 100%;
    }
  }
  .heading {
    display: flex;
    flex-direction: column;
    padding-right: 110px;
  }
  @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) {
    .text,
    .Flexresponse {
      display: flex;
      flex-direction: row;
    }
    .heading {
      display: flex;
      flex-direction: column;
    }
  }
  @media only screen and (min-width: 1023px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .text {
      display: flex;
    }
    .image {
      margin-top: 0;
      margin-bottom: 50px;
      min-width: 380px;
      max-width: 574px;
      height: 100%;
    }
    .Flexresponse {
      display: flex;
      justify-content: space-between;
      max-width: 1200px;
    }
    p {
      max-width: 420px;
      min-width: 300px;
    }
  }
`;
