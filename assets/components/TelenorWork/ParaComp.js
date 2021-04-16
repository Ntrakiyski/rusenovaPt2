import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

export const ParaComp = ({ title, content }) => {
  const Styles = styled(motion.div)`
    line-height: 150%;
    display: flex;
    flex-direction: column;

    div {
      font-size: 18px;
      margin-bottom: 20px;
      font-family: "Gilroy-ExtraBold";
      min-width: 150px;
    }

    p {
      max-width: 350px;
    }
    @media only screen and (min-width: 1023px) {
      div {
        font-size: 24px;
      }
    }
  `;

  return (
    <Styles>
      <div>{title}</div>
      {content}
    </Styles>
  );
};
