import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import { useMediaQuery } from "../CheckWidth";

export const SectionLeft = ({ imgSrc, title, paragraph, number }) => {
  const TabletMode = useMediaQuery(1023);

  return (
    <Styles className="setPadding">
      <motion.div className="text">
        {TabletMode && (
          <>
            <span>- {number} -</span>
            <h3>{title}</h3>
          </>
        )}
        <div className="response">
          <div className="image">
            <img src={imgSrc} alt="talk on a table" />
          </div>
          <motion.div className="heading">
            {!TabletMode && (
              <>
                <span>- {number} -</span>
                <h3>{title}</h3>
              </>
            )}
            <p>{paragraph}</p>
          </motion.div>
        </div>
      </motion.div>
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
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
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
      margin-bottom: 50px;
      min-width: 380px;
      max-width: 574px;
      height: 100%;
    }
    .response {
      display: flex;
      justify-content: space-between;
      max-width: 1200px;
    }
    p {
      max-width: 420px;
      min-width: 300px;
    }
    .heading {
      padding-left: 80px;
    }
  }
`;
