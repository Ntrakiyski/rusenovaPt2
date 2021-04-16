import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

const Styles = styled(motion.div)`
  .values {
    margin-top: 80px;
  }
  h5 {
    margin-top: 0;
  }
  .text {
    font-size: 24px;
    line-height: 150%;

    .spanHeading {
      border-bottom: 2px solid #dc2020;
      font-size: 24px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    .text {
      font-size: 22px;
    }
  }
  @media only screen and (min-width: 1023px) {
    display: flex;
    align-items: center;
    justify-content: center;

    .content {
      min-height: calc(100vh - 218px);
      display: flex;
      flex-direction: column;

      justify-content: center;
    }

    .values {
      margin-bottom: 0;
      margin-top: 230px;
    }
    h5 {
    }
    .text {
      width: 75%;
      font-size: 18px;
    }
  }
`;

export const Heading = () => {
  return (
    <Styles className="setPadding">
      <div className="content">
        <h5>ABOUT</h5>
        <motion.div className="text">
          I am a Product Designer with over{" "}
          <span className="spanHeading">three</span> years of experience in the
          telecommunications industry designing{" "}
          <span className="spanHeading">cross-platform</span> products,
          including SaaS. My goal is to help businesses in creating products
          that <span className="spanHeading">empower</span> people.
        </motion.div>
        <h5 className="values">VALUES</h5>
      </div>
    </Styles>
  );
};
