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
          <div className="response">
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
          <div className="response">
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
    width: calc(100% - 13px);
    img {
      width: 100%;
    }
  }
  .heading {
    display: flex;
    flex-direction: column;
    padding-right: 80px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
  }
  @media only screen and (min-width: 1023px) {
    .image {
      margin-top: 0;
      margin-bottom: 50px;
      min-width: 380px;
      max-width: 574px;
      height: 100%;
    }
    .response {
      display: flex;
      justify-content: space-between;
    }
    p {
      width: 420px;
    }
  }
`;
