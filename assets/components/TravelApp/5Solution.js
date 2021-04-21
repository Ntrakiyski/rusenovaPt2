import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const StylesSolution = styled(motion.div)`
  .subHead {
    color: #818181;
    font-size: 18px;
    font-weight: 300;
  }
  .bullets {
    margin-top: 28px;
    div {
      margin: 12px 0;
      font-size: 16px;
    }
    #third {
      margin-bottom: 0;
    }
  }

  @media only screen and (min-width: 1023px) {
    .bullets {
      display: flex;
      justify-content: space-between;
      div {
        margin-right: 40px;
      }
    }
  }
`;

export const Solution = () => {
  return (
    <StylesSolution className="setPadding">
      <h1>Solution</h1>
      <div className="subHead">Hypothesis</div>
      <div className="bullets ">
        <div id="first">• Community oriented place </div>
        <div id="seccond">• Content based on personal lifestyle </div>
        <div id="third">• Trip guides </div>
      </div>
    </StylesSolution>
  );
};
